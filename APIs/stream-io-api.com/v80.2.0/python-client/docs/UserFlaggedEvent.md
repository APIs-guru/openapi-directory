# UserFlaggedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**target_user** | **str** |  | [optional] 
**target_users** | **List[str]** |  | [optional] 
**type** | **str** |  | [default to 'user.flagged']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_flagged_event import UserFlaggedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserFlaggedEvent from a JSON string
user_flagged_event_instance = UserFlaggedEvent.from_json(json)
# print the JSON string representation of the object
print(UserFlaggedEvent.to_json())

# convert the object into a dict
user_flagged_event_dict = user_flagged_event_instance.to_dict()
# create an instance of UserFlaggedEvent from a dict
user_flagged_event_from_dict = UserFlaggedEvent.from_dict(user_flagged_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


