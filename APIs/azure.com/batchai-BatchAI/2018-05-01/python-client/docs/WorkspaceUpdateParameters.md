# WorkspaceUpdateParameters

Workspace update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The user specified tags associated with the Workspace. | [optional] 

## Example

```python
from openapi_client.models.workspace_update_parameters import WorkspaceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceUpdateParameters from a JSON string
workspace_update_parameters_instance = WorkspaceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WorkspaceUpdateParameters.to_json())

# convert the object into a dict
workspace_update_parameters_dict = workspace_update_parameters_instance.to_dict()
# create an instance of WorkspaceUpdateParameters from a dict
workspace_update_parameters_from_dict = WorkspaceUpdateParameters.from_dict(workspace_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


