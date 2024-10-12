# UserUpdatedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'user.updated']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_updated_event import UserUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdatedEvent from a JSON string
user_updated_event_instance = UserUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(UserUpdatedEvent.to_json())

# convert the object into a dict
user_updated_event_dict = user_updated_event_instance.to_dict()
# create an instance of UserUpdatedEvent from a dict
user_updated_event_from_dict = UserUpdatedEvent.from_dict(user_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


