# WorkspaceRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymous_data_collection** | **bool** |  | [optional] 
**customer_id** | **str** |  | 
**default_geography** | [**Geography**](Geography.md) |  | [optional] 
**display_setup_wizard** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**feedback_done** | **bool** |  | [optional] 
**first_completed_sync** | **bool** |  | [optional] 
**initial_setup_complete** | **bool** |  | 
**name** | **str** |  | 
**news** | **bool** |  | [optional] 
**notifications** | [**List[Notification]**](Notification.md) |  | [optional] 
**security_updates** | **bool** |  | [optional] 
**slug** | **str** |  | 
**webhook_configs** | [**List[WebhookConfigRead]**](WebhookConfigRead.md) |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.workspace_read import WorkspaceRead

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceRead from a JSON string
workspace_read_instance = WorkspaceRead.from_json(json)
# print the JSON string representation of the object
print(WorkspaceRead.to_json())

# convert the object into a dict
workspace_read_dict = workspace_read_instance.to_dict()
# create an instance of WorkspaceRead from a dict
workspace_read_from_dict = WorkspaceRead.from_dict(workspace_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


