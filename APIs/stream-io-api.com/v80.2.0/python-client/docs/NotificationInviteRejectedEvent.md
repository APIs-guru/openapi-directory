# NotificationInviteRejectedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**type** | **str** |  | [default to 'notification.invite_rejected']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_invite_rejected_event import NotificationInviteRejectedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationInviteRejectedEvent from a JSON string
notification_invite_rejected_event_instance = NotificationInviteRejectedEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationInviteRejectedEvent.to_json())

# convert the object into a dict
notification_invite_rejected_event_dict = notification_invite_rejected_event_instance.to_dict()
# create an instance of NotificationInviteRejectedEvent from a dict
notification_invite_rejected_event_from_dict = NotificationInviteRejectedEvent.from_dict(notification_invite_rejected_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


