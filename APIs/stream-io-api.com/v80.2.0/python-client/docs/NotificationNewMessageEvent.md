# NotificationNewMessageEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**message** | [**Message**](Message.md) |  | 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'notification.message_new']

## Example

```python
from openapi_client.models.notification_new_message_event import NotificationNewMessageEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationNewMessageEvent from a JSON string
notification_new_message_event_instance = NotificationNewMessageEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationNewMessageEvent.to_json())

# convert the object into a dict
notification_new_message_event_dict = notification_new_message_event_instance.to_dict()
# create an instance of NotificationNewMessageEvent from a dict
notification_new_message_event_from_dict = NotificationNewMessageEvent.from_dict(notification_new_message_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


