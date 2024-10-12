# RevertVariableResponse

The result of reverting a variable in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variable** | [**Variable**](Variable.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_variable_response import RevertVariableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertVariableResponse from a JSON string
revert_variable_response_instance = RevertVariableResponse.from_json(json)
# print the JSON string representation of the object
print(RevertVariableResponse.to_json())

# convert the object into a dict
revert_variable_response_dict = revert_variable_response_instance.to_dict()
# create an instance of RevertVariableResponse from a dict
revert_variable_response_from_dict = RevertVariableResponse.from_dict(revert_variable_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


