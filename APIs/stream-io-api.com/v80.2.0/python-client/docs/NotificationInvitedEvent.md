# NotificationInvitedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**member** | [**ChannelMember**](ChannelMember.md) |  | [optional] 
**type** | **str** |  | [default to 'notification.invited']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_invited_event import NotificationInvitedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationInvitedEvent from a JSON string
notification_invited_event_instance = NotificationInvitedEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationInvitedEvent.to_json())

# convert the object into a dict
notification_invited_event_dict = notification_invited_event_instance.to_dict()
# create an instance of NotificationInvitedEvent from a dict
notification_invited_event_from_dict = NotificationInvitedEvent.from_dict(notification_invited_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


