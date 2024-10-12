# WorkspaceProperties

The properties of a machine learning workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | The creation time for this workspace resource. | [optional] [readonly] 
**key_vault_identifier_id** | **str** | The key vault identifier used for encrypted workspaces. | [optional] 
**owner_email** | **str** | The email id of the owner for this workspace. | 
**studio_endpoint** | **str** | The regional endpoint for the machine learning studio service which hosts this workspace. | [optional] [readonly] 
**user_storage_account_id** | **str** | The fully qualified arm id of the storage account associated with this workspace. | 
**workspace_id** | **str** | The immutable id associated with this workspace. | [optional] [readonly] 
**workspace_state** | **str** | The current state of workspace resource. | [optional] [readonly] 
**workspace_type** | **str** | The type of this workspace. | [optional] [readonly] 

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


