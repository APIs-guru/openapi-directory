# Notification

Details about a notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_body** | **str** | The HTML body of the email notification for the issue. | [optional] 
**restrict** | [**NotificationRecipientsRestrictions**](NotificationRecipientsRestrictions.md) | Restricts the notifications to users with the specified permissions. | [optional] 
**subject** | **str** | The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary. | [optional] 
**text_body** | **str** | The plain text body of the email notification for the issue. | [optional] 
**to** | [**NotificationRecipients**](NotificationRecipients.md) | The recipients of the email notification for the issue. | [optional] 

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


