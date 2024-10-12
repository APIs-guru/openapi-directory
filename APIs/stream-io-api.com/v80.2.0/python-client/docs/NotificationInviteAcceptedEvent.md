# NotificationInviteAcceptedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**type** | **str** |  | [default to 'notification.invite_accepted']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_invite_accepted_event import NotificationInviteAcceptedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationInviteAcceptedEvent from a JSON string
notification_invite_accepted_event_instance = NotificationInviteAcceptedEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationInviteAcceptedEvent.to_json())

# convert the object into a dict
notification_invite_accepted_event_dict = notification_invite_accepted_event_instance.to_dict()
# create an instance of NotificationInviteAcceptedEvent from a dict
notification_invite_accepted_event_from_dict = NotificationInviteAcceptedEvent.from_dict(notification_invite_accepted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


