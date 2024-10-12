# WorkspaceProperties

The properties of a machine learning team account workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The immutable id of the team account which contains this workspace. | [optional] [readonly] 
**creation_date** | **datetime** | The creation date of the machine learning workspace in ISO8601 format. | [optional] [readonly] 
**description** | **str** | The description of this workspace. | [optional] 
**friendly_name** | **str** | The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created | 
**provisioning_state** | **str** | The current deployment state of team account workspace resource. The provisioningState is to indicate states for resource provisioning. | [optional] [readonly] 
**workspace_id** | **str** | The immutable id of this workspace. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workspace_properties import WorkspaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceProperties from a JSON string
workspace_properties_instance = WorkspaceProperties.from_json(json)
# print the JSON string representation of the object
print(WorkspaceProperties.to_json())

# convert the object into a dict
workspace_properties_dict = workspace_properties_instance.to_dict()
# create an instance of WorkspaceProperties from a dict
workspace_properties_from_dict = WorkspaceProperties.from_dict(workspace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


