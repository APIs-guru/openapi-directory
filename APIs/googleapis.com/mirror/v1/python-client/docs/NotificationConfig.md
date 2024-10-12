# NotificationConfig

Controls how notifications for a timeline item are presented to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_time** | **datetime** | The time at which the notification should be delivered. | [optional] 
**level** | **str** | Describes how important the notification is. Allowed values are:   - DEFAULT - Notifications of default importance. A chime will be played to alert users. | [optional] 

## Example

```python
from openapi_client.models.notification_config import NotificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationConfig from a JSON string
notification_config_instance = NotificationConfig.from_json(json)
# print the JSON string representation of the object
print(NotificationConfig.to_json())

# convert the object into a dict
notification_config_dict = notification_config_instance.to_dict()
# create an instance of NotificationConfig from a dict
notification_config_from_dict = NotificationConfig.from_dict(notification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


