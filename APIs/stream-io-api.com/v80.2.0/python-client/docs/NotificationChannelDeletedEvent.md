# NotificationChannelDeletedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'notification.channel_deleted']

## Example

```python
from openapi_client.models.notification_channel_deleted_event import NotificationChannelDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelDeletedEvent from a JSON string
notification_channel_deleted_event_instance = NotificationChannelDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelDeletedEvent.to_json())

# convert the object into a dict
notification_channel_deleted_event_dict = notification_channel_deleted_event_instance.to_dict()
# create an instance of NotificationChannelDeletedEvent from a dict
notification_channel_deleted_event_from_dict = NotificationChannelDeletedEvent.from_dict(notification_channel_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


