# WorkspaceProperties

Workspace specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Time when the Workspace was created. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioned state of the Workspace | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** | The time at which the workspace entered its current provisioning state. | [optional] [readonly] 

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


