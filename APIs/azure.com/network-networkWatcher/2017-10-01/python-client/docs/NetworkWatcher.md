# NetworkWatcher

Network watcher in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**NetworkWatcherPropertiesFormat**](NetworkWatcherPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_watcher import NetworkWatcher

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkWatcher from a JSON string
network_watcher_instance = NetworkWatcher.from_json(json)
# print the JSON string representation of the object
print(NetworkWatcher.to_json())

# convert the object into a dict
network_watcher_dict = network_watcher_instance.to_dict()
# create an instance of NetworkWatcher from a dict
network_watcher_from_dict = NetworkWatcher.from_dict(network_watcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


