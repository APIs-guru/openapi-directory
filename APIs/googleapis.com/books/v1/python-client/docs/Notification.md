# Notification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | [optional] 
**crm_experiment_ids** | **List[str]** | The list of crm experiment ids. | [optional] 
**doc_id** | **str** |  | [optional] 
**doc_type** | **str** |  | [optional] 
**dont_show_notification** | **bool** |  | [optional] 
**icon_url** | **str** |  | [optional] 
**is_document_mature** | **bool** |  | [optional] 
**kind** | **str** | Resource type. | [optional] 
**notification_group** | **str** |  | [optional] 
**notification_type** | **str** |  | [optional] 
**pcampaign_id** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**show_notification_settings_action** | **bool** |  | [optional] 
**target_url** | **str** |  | [optional] 
**time_to_expire_ms** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification import Notification

# TODO update the JSON string below
json = "{}"
# create an instance of Notification from a JSON string
notification_instance = Notification.from_json(json)
# print the JSON string representation of the object
print(Notification.to_json())

# convert the object into a dict
notification_dict = notification_instance.to_dict()
# create an instance of Notification from a dict
notification_from_dict = Notification.from_dict(notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


