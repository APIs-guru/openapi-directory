# NotificationChannelTruncatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'notification.channel_truncated']

## Example

```python
from openapi_client.models.notification_channel_truncated_event import NotificationChannelTruncatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelTruncatedEvent from a JSON string
notification_channel_truncated_event_instance = NotificationChannelTruncatedEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelTruncatedEvent.to_json())

# convert the object into a dict
notification_channel_truncated_event_dict = notification_channel_truncated_event_instance.to_dict()
# create an instance of NotificationChannelTruncatedEvent from a dict
notification_channel_truncated_event_from_dict = NotificationChannelTruncatedEvent.from_dict(notification_channel_truncated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


