# UserPresenceChangedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'user.presence.changed']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_presence_changed_event import UserPresenceChangedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserPresenceChangedEvent from a JSON string
user_presence_changed_event_instance = UserPresenceChangedEvent.from_json(json)
# print the JSON string representation of the object
print(UserPresenceChangedEvent.to_json())

# convert the object into a dict
user_presence_changed_event_dict = user_presence_changed_event_instance.to_dict()
# create an instance of UserPresenceChangedEvent from a dict
user_presence_changed_event_from_dict = UserPresenceChangedEvent.from_dict(user_presence_changed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


