# NetworkWatcherListResult

List of network watcher resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[NetworkWatcher]**](NetworkWatcher.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_watcher_list_result import NetworkWatcherListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkWatcherListResult from a JSON string
network_watcher_list_result_instance = NetworkWatcherListResult.from_json(json)
# print the JSON string representation of the object
print(NetworkWatcherListResult.to_json())

# convert the object into a dict
network_watcher_list_result_dict = network_watcher_list_result_instance.to_dict()
# create an instance of NetworkWatcherListResult from a dict
network_watcher_list_result_from_dict = NetworkWatcherListResult.from_dict(network_watcher_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


