# UserReactivatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'user.reactivated']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_reactivated_event import UserReactivatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserReactivatedEvent from a JSON string
user_reactivated_event_instance = UserReactivatedEvent.from_json(json)
# print the JSON string representation of the object
print(UserReactivatedEvent.to_json())

# convert the object into a dict
user_reactivated_event_dict = user_reactivated_event_instance.to_dict()
# create an instance of UserReactivatedEvent from a dict
user_reactivated_event_from_dict = UserReactivatedEvent.from_dict(user_reactivated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


