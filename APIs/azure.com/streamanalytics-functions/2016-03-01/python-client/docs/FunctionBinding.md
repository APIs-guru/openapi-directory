# FunctionBinding

The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Indicates the function binding type. | [optional] 

## Example

```python
from openapi_client.models.function_binding import FunctionBinding

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionBinding from a JSON string
function_binding_instance = FunctionBinding.from_json(json)
# print the JSON string representation of the object
print(FunctionBinding.to_json())

# convert the object into a dict
function_binding_dict = function_binding_instance.to_dict()
# create an instance of FunctionBinding from a dict
function_binding_from_dict = FunctionBinding.from_dict(function_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


