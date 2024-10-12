# WorkspaceCreateParameters

Workspace creation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The region in which to create the Workspace. | 
**tags** | **Dict[str, str]** | The user specified tags associated with the Workspace. | [optional] 

## Example

```python
from openapi_client.models.workspace_create_parameters import WorkspaceCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCreateParameters from a JSON string
workspace_create_parameters_instance = WorkspaceCreateParameters.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCreateParameters.to_json())

# convert the object into a dict
workspace_create_parameters_dict = workspace_create_parameters_instance.to_dict()
# create an instance of WorkspaceCreateParameters from a dict
workspace_create_parameters_from_dict = WorkspaceCreateParameters.from_dict(workspace_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


