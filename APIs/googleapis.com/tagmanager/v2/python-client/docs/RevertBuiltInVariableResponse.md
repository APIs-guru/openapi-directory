# RevertBuiltInVariableResponse

The result of reverting a built-in variable in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the built-in variable is enabled after reversion. | [optional] 

## Example

```python
from openapi_client.models.revert_built_in_variable_response import RevertBuiltInVariableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertBuiltInVariableResponse from a JSON string
revert_built_in_variable_response_instance = RevertBuiltInVariableResponse.from_json(json)
# print the JSON string representation of the object
print(RevertBuiltInVariableResponse.to_json())

# convert the object into a dict
revert_built_in_variable_response_dict = revert_built_in_variable_response_instance.to_dict()
# create an instance of RevertBuiltInVariableResponse from a dict
revert_built_in_variable_response_from_dict = RevertBuiltInVariableResponse.from_dict(revert_built_in_variable_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


