# UserWatchingStopEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | 
**channel_type** | **str** |  | 
**cid** | **str** |  | 
**created_at** | **datetime** |  | 
**type** | **str** |  | [default to 'user.watching.stop']
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**watcher_count** | **int** |  | 

## Example

```python
from openapi_client.models.user_watching_stop_event import UserWatchingStopEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UserWatchingStopEvent from a JSON string
user_watching_stop_event_instance = UserWatchingStopEvent.from_json(json)
# print the JSON string representation of the object
print(UserWatchingStopEvent.to_json())

# convert the object into a dict
user_watching_stop_event_dict = user_watching_stop_event_instance.to_dict()
# create an instance of UserWatchingStopEvent from a dict
user_watching_stop_event_from_dict = UserWatchingStopEvent.from_dict(user_watching_stop_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


