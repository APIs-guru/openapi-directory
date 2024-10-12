# UserWatchingStartEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**team** | **str** |  | [optional] 
**type** | **str** |  | [default to 'user.watching.start']
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**watcher_count** | **int** |  | 

## Example

```python
from openapi_client.models.user_watching_start_event import UserWatchingStartEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserWatchingStartEvent from a JSON string
user_watching_start_event_instance = UserWatchingStartEvent.from_json(json)
# print the JSON string representation of the object
print(UserWatchingStartEvent.to_json())

# convert the object into a dict
user_watching_start_event_dict = user_watching_start_event_instance.to_dict()
# create an instance of UserWatchingStartEvent from a dict
user_watching_start_event_from_dict = UserWatchingStartEvent.from_dict(user_watching_start_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


