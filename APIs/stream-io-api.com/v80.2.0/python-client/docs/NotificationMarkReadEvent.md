# NotificationMarkReadEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**team** | **str** |  | [optional] 
**total_unread_count** | **int** |  | 
**type** | **str** |  | [default to 'notification.mark_read']
**unread_channels** | **int** |  | 
**unread_count** | **int** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_mark_read_event import NotificationMarkReadEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationMarkReadEvent from a JSON string
notification_mark_read_event_instance = NotificationMarkReadEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationMarkReadEvent.to_json())

# convert the object into a dict
notification_mark_read_event_dict = notification_mark_read_event_instance.to_dict()
# create an instance of NotificationMarkReadEvent from a dict
notification_mark_read_event_from_dict = NotificationMarkReadEvent.from_dict(notification_mark_read_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


