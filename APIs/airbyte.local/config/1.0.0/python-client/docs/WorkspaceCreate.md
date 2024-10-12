# WorkspaceCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymous_data_collection** | **bool** |  | [optional] 
**default_geography** | [**Geography**](Geography.md) |  | [optional] 
**display_setup_wizard** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**name** | **str** |  | 
**news** | **bool** |  | [optional] 
**notifications** | [**List[Notification]**](Notification.md) |  | [optional] 
**security_updates** | **bool** |  | [optional] 
**webhook_configs** | [**List[WebhookConfigWrite]**](WebhookConfigWrite.md) |  | [optional] 

## Example

```python
from openapi_client.models.workspace_create import WorkspaceCreate

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceCreate from a JSON string
workspace_create_instance = WorkspaceCreate.from_json(json)
# print the JSON string representation of the object
print(WorkspaceCreate.to_json())

# convert the object into a dict
workspace_create_dict = workspace_create_instance.to_dict()
# create an instance of WorkspaceCreate from a dict
workspace_create_from_dict = WorkspaceCreate.from_dict(workspace_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


