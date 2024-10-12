# FunctionProperties

The properties that are associated with a function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. | [optional] [readonly] 
**type** | **str** | Indicates the type of function. | [optional] 

## Example

```python
from openapi_client.models.function_properties import FunctionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionProperties from a JSON string
function_properties_instance = FunctionProperties.from_json(json)
# print the JSON string representation of the object
print(FunctionProperties.to_json())

# convert the object into a dict
function_properties_dict = function_properties_instance.to_dict()
# create an instance of FunctionProperties from a dict
function_properties_from_dict = FunctionProperties.from_dict(function_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


