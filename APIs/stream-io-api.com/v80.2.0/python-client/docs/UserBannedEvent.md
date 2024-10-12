# UserBannedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**created_by** | [**UserObject**](UserObject.md) |  | 
**expiration** | **datetime** |  | [optional] 
**reason** | **str** |  | [optional] 
**shadow** | **bool** |  | 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'user.banned']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_banned_event import UserBannedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserBannedEvent from a JSON string
user_banned_event_instance = UserBannedEvent.from_json(json)
# print the JSON string representation of the object
print(UserBannedEvent.to_json())

# convert the object into a dict
user_banned_event_dict = user_banned_event_instance.to_dict()
# create an instance of UserBannedEvent from a dict
user_banned_event_from_dict = UserBannedEvent.from_dict(user_banned_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


