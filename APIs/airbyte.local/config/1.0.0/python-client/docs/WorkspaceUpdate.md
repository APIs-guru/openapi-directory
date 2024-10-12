# WorkspaceUpdate

Used to apply a patch-style update to a workspace, which means that null properties remain unchanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymous_data_collection** | **bool** |  | [optional] 
**default_geography** | [**Geography**](Geography.md) |  | [optional] 
**display_setup_wizard** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**initial_setup_complete** | **bool** |  | [optional] 
**news** | **bool** |  | [optional] 
**notifications** | [**List[Notification]**](Notification.md) |  | [optional] 
**security_updates** | **bool** |  | [optional] 
**webhook_configs** | [**List[WebhookConfigWrite]**](WebhookConfigWrite.md) |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.workspace_update import WorkspaceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceUpdate from a JSON string
workspace_update_instance = WorkspaceUpdate.from_json(json)
# print the JSON string representation of the object
print(WorkspaceUpdate.to_json())

# convert the object into a dict
workspace_update_dict = workspace_update_instance.to_dict()
# create an instance of WorkspaceUpdate from a dict
workspace_update_from_dict = WorkspaceUpdate.from_dict(workspace_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


