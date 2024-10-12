# UserDeletedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**delete_conversation_channels** | **bool** |  | 
**hard_delete** | **bool** |  | 
**mark_messages_deleted** | **bool** |  | 
**type** | **str** |  | [default to 'user.deleted']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_deleted_event import UserDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserDeletedEvent from a JSON string
user_deleted_event_instance = UserDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(UserDeletedEvent.to_json())

# convert the object into a dict
user_deleted_event_dict = user_deleted_event_instance.to_dict()
# create an instance of UserDeletedEvent from a dict
user_deleted_event_from_dict = UserDeletedEvent.from_dict(user_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


