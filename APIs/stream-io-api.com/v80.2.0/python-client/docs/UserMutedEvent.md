# UserMutedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**target_user** | **str** |  | [optional] 
**target_users** | **List[str]** |  | [optional] 
**type** | **str** |  | [default to 'user.muted']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_muted_event import UserMutedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserMutedEvent from a JSON string
user_muted_event_instance = UserMutedEvent.from_json(json)
# print the JSON string representation of the object
print(UserMutedEvent.to_json())

# convert the object into a dict
user_muted_event_dict = user_muted_event_instance.to_dict()
# create an instance of UserMutedEvent from a dict
user_muted_event_from_dict = UserMutedEvent.from_dict(user_muted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


