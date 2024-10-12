# NotificationMarkUnreadEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**first_unread_message_id** | **str** |  | 
**last_read_at** | **datetime** |  | 
**team** | **str** |  | [optional] 
**total_unread_count** | **int** |  | 
**type** | **str** |  | [default to 'notification.mark_unread']
**unread_channels** | **int** |  | 
**unread_count** | **int** |  | 
**unread_messages** | **int** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_mark_unread_event import NotificationMarkUnreadEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationMarkUnreadEvent from a JSON string
notification_mark_unread_event_instance = NotificationMarkUnreadEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationMarkUnreadEvent.to_json())

# convert the object into a dict
notification_mark_unread_event_dict = notification_mark_unread_event_instance.to_dict()
# create an instance of NotificationMarkUnreadEvent from a dict
notification_mark_unread_event_from_dict = NotificationMarkUnreadEvent.from_dict(notification_mark_unread_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


