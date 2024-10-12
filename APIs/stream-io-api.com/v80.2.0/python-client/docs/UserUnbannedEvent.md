# UserUnbannedEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**shadow** | **bool** |  | 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'user.unbanned']
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_unbanned_event import UserUnbannedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserUnbannedEvent from a JSON string
user_unbanned_event_instance = UserUnbannedEvent.from_json(json)
# print the JSON string representation of the object
print(UserUnbannedEvent.to_json())

# convert the object into a dict
user_unbanned_event_dict = user_unbanned_event_instance.to_dict()
# create an instance of UserUnbannedEvent from a dict
user_unbanned_event_from_dict = UserUnbannedEvent.from_dict(user_unbanned_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


