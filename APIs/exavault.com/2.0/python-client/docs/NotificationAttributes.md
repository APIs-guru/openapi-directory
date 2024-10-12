# NotificationAttributes

Attributes for the notification including the path, recipients, and share data. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action that triggers notification. | [optional] 
**created** | **datetime** | Timestamp of notifiction creation. | [optional] 
**message** | **str** | Custom message that will be sent to the notification recipients. | [optional] 
**modified** | **datetime** | Timestamp of notification modification. | [optional] 
**name** | **str** | Name of the item that the notification is set on. | [optional] 
**path** | **str** | Path to the item that the notification is set on. | [optional] 
**readable_description** | **str** | Human readable description of the notification. | [optional] 
**readable_description_without_path** | **str** | Human readable description of the notification without item path. | [optional] 
**recipients** | [**List[NotificationRecipient]**](NotificationRecipient.md) | Notification recipients. | [optional] 
**send_email** | **bool** | Whether or not an email will send when the notification is triggered. | [optional] 
**share_id** | **str** | ID of the share that the notification belogns to. | [optional] 
**type** | **str** | Type of the resource the notification is attached to.  | [optional] 
**user_id** | **str** | ID of the user that the notification belongs to. | [optional] 
**usernames** | **List[str]** | Detail on which users can trigger the notification. | [optional] 

## Example

```python
from openapi_client.models.notification_attributes import NotificationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationAttributes from a JSON string
notification_attributes_instance = NotificationAttributes.from_json(json)
# print the JSON string representation of the object
print(NotificationAttributes.to_json())

# convert the object into a dict
notification_attributes_dict = notification_attributes_instance.to_dict()
# create an instance of NotificationAttributes from a dict
notification_attributes_from_dict = NotificationAttributes.from_dict(notification_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


