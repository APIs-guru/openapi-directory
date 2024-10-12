# NotificationChannelStrategy

Control over how the notification channels in notification_channels are notified when this alert fires, on a per-channel basis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_channel_names** | **List[str]** | The full REST resource name for the notification channels that these settings apply to. Each of these correspond to the name field in one of the NotificationChannel objects referenced in the notification_channels field of this AlertPolicy. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]  | [optional] 
**renotify_interval** | **str** | The frequency at which to send reminder notifications for open incidents. | [optional] 

## Example

```python
from openapi_client.models.notification_channel_strategy import NotificationChannelStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelStrategy from a JSON string
notification_channel_strategy_instance = NotificationChannelStrategy.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelStrategy.to_json())

# convert the object into a dict
notification_channel_strategy_dict = notification_channel_strategy_instance.to_dict()
# create an instance of NotificationChannelStrategy from a dict
notification_channel_strategy_from_dict = NotificationChannelStrategy.from_dict(notification_channel_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


