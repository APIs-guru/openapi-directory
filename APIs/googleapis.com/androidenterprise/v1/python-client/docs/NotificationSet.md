# NotificationSet

A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification** | [**List[Notification]**](Notification.md) | The notifications received, or empty if no notifications are present. | [optional] 
**notification_set_id** | **str** | The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present. | [optional] 

## Example

```python
from openapi_client.models.notification_set import NotificationSet

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSet from a JSON string
notification_set_instance = NotificationSet.from_json(json)
# print the JSON string representation of the object
print(NotificationSet.to_json())

# convert the object into a dict
notification_set_dict = notification_set_instance.to_dict()
# create an instance of NotificationSet from a dict
notification_set_from_dict = NotificationSet.from_dict(notification_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


