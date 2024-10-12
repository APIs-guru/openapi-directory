# WatcherListResult

The response model for the list watcher operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Watcher]**](Watcher.md) | Gets or sets a list of watchers. | [optional] 

## Example

```python
from openapi_client.models.watcher_list_result import WatcherListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WatcherListResult from a JSON string
watcher_list_result_instance = WatcherListResult.from_json(json)
# print the JSON string representation of the object
print(WatcherListResult.to_json())

# convert the object into a dict
watcher_list_result_dict = watcher_list_result_instance.to_dict()
# create an instance of WatcherListResult from a dict
watcher_list_result_from_dict = WatcherListResult.from_dict(watcher_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


