# FunctionSecrets

Function secrets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | FunctionSecrets resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.function_secrets import FunctionSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionSecrets from a JSON string
function_secrets_instance = FunctionSecrets.from_json(json)
# print the JSON string representation of the object
print(FunctionSecrets.to_json())

# convert the object into a dict
function_secrets_dict = function_secrets_instance.to_dict()
# create an instance of FunctionSecrets from a dict
function_secrets_from_dict = FunctionSecrets.from_dict(function_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


