# NotificationPreference

Notification preference for a job stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**send_notification** | **bool** | Notification is required or not. | 
**stage_name** | **str** | Name of the stage. | 

## Example

```python
from openapi_client.models.notification_preference import NotificationPreference

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationPreference from a JSON string
notification_preference_instance = NotificationPreference.from_json(json)
# print the JSON string representation of the object
print(NotificationPreference.to_json())

# convert the object into a dict
notification_preference_dict = notification_preference_instance.to_dict()
# create an instance of NotificationPreference from a dict
notification_preference_from_dict = NotificationPreference.from_dict(notification_preference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


