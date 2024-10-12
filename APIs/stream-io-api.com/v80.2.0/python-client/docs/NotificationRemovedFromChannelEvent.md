# NotificationRemovedFromChannelEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**type** | **str** |  | [default to 'notification.removed_from_channel']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_removed_from_channel_event import NotificationRemovedFromChannelEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRemovedFromChannelEvent from a JSON string
notification_removed_from_channel_event_instance = NotificationRemovedFromChannelEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationRemovedFromChannelEvent.to_json())

# convert the object into a dict
notification_removed_from_channel_event_dict = notification_removed_from_channel_event_instance.to_dict()
# create an instance of NotificationRemovedFromChannelEvent from a dict
notification_removed_from_channel_event_from_dict = NotificationRemovedFromChannelEvent.from_dict(notification_removed_from_channel_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


