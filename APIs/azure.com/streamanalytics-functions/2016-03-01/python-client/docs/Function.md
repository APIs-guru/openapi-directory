# Function

A function object, containing all information associated with the named function. All functions are contained under a streaming job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FunctionProperties**](FunctionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.function import Function

# TODO update the JSON string below
json = "{}"
# create an instance of Function from a JSON string
function_instance = Function.from_json(json)
# print the JSON string representation of the object
print(Function.to_json())

# convert the object into a dict
function_dict = function_instance.to_dict()
# create an instance of Function from a dict
function_from_dict = Function.from_dict(function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


