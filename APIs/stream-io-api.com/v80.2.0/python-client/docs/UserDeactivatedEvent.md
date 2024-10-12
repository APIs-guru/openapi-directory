# UserDeactivatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**created_by** | [**UserObject**](UserObject.md) |  | 
**type** | **str** |  | [default to 'user.deactivated']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_deactivated_event import UserDeactivatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserDeactivatedEvent from a JSON string
user_deactivated_event_instance = UserDeactivatedEvent.from_json(json)
# print the JSON string representation of the object
print(UserDeactivatedEvent.to_json())

# convert the object into a dict
user_deactivated_event_dict = user_deactivated_event_instance.to_dict()
# create an instance of UserDeactivatedEvent from a dict
user_deactivated_event_from_dict = UserDeactivatedEvent.from_dict(user_deactivated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


