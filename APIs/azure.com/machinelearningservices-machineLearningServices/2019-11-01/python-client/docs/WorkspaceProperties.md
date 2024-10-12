# WorkspaceProperties

The properties of a machine learning workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_insights** | **str** | ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created | [optional] 
**container_registry** | **str** | ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created | [optional] 
**creation_time** | **datetime** | The creation time of the machine learning workspace in ISO8601 format. | [optional] [readonly] 
**description** | **str** | The description of this workspace. | [optional] 
**discovery_url** | **str** | Url for the discovery service to identify regional endpoints for machine learning experimentation services | [optional] 
**friendly_name** | **str** | The friendly name for this workspace. This name in mutable | [optional] 
**key_vault** | **str** | ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created | [optional] 
**provisioning_state** | **str** | The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning. | [optional] [readonly] 
**storage_account** | **str** | ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created | [optional] 
**workspace_id** | **str** | The immutable id associated with this workspace. | [optional] [readonly] 

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


