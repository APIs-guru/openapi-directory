# UserUnmutedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**target_user** | **str** |  | [optional] 
**target_users** | **List[str]** |  | [optional] 
**type** | **str** |  | [default to 'user.unmuted']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_unmuted_event import UserUnmutedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserUnmutedEvent from a JSON string
user_unmuted_event_instance = UserUnmutedEvent.from_json(json)
# print the JSON string representation of the object
print(UserUnmutedEvent.to_json())

# convert the object into a dict
user_unmuted_event_dict = user_unmuted_event_instance.to_dict()
# create an instance of UserUnmutedEvent from a dict
user_unmuted_event_from_dict = UserUnmutedEvent.from_dict(user_unmuted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


