# UserUnreadReminderEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**Dict[str, ChannelMessages]**](ChannelMessages.md) |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'user.unread_message_reminder']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_unread_reminder_event import UserUnreadReminderEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserUnreadReminderEvent from a JSON string
user_unread_reminder_event_instance = UserUnreadReminderEvent.from_json(json)
# print the JSON string representation of the object
print(UserUnreadReminderEvent.to_json())

# convert the object into a dict
user_unread_reminder_event_dict = user_unread_reminder_event_instance.to_dict()
# create an instance of UserUnreadReminderEvent from a dict
user_unread_reminder_event_from_dict = UserUnreadReminderEvent.from_dict(user_unread_reminder_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


