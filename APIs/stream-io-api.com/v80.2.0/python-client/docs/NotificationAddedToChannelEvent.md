# NotificationAddedToChannelEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**type** | **str** |  | [default to 'notification.added_to_channel']

## Example

```python
from openapi_client.models.notification_added_to_channel_event import NotificationAddedToChannelEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationAddedToChannelEvent from a JSON string
notification_added_to_channel_event_instance = NotificationAddedToChannelEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationAddedToChannelEvent.to_json())

# convert the object into a dict
notification_added_to_channel_event_dict = notification_added_to_channel_event_instance.to_dict()
# create an instance of NotificationAddedToChannelEvent from a dict
notification_added_to_channel_event_from_dict = NotificationAddedToChannelEvent.from_dict(notification_added_to_channel_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


