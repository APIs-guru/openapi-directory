# NotificationChannelMutesUpdatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**me** | [**OwnUser**](OwnUser.md) |  | 
**type** | **str** |  | [default to 'notification.channel_mutes_updated']

## Example

```python
from openapi_client.models.notification_channel_mutes_updated_event import NotificationChannelMutesUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelMutesUpdatedEvent from a JSON string
notification_channel_mutes_updated_event_instance = NotificationChannelMutesUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelMutesUpdatedEvent.to_json())

# convert the object into a dict
notification_channel_mutes_updated_event_dict = notification_channel_mutes_updated_event_instance.to_dict()
# create an instance of NotificationChannelMutesUpdatedEvent from a dict
notification_channel_mutes_updated_event_from_dict = NotificationChannelMutesUpdatedEvent.from_dict(notification_channel_mutes_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


