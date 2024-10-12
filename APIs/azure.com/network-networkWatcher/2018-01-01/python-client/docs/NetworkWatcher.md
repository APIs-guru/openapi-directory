# NetworkWatcher

Network watcher in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** |  | [optional] [default to 'A unique read-only string that changes whenever the resource is updated.']
**id** | **str** | ID of the network watcher. | [optional] [readonly] 
**name** | **str** | Name of the network watcher. | [optional] [readonly] 
**properties** | [**NetworkWatcherPropertiesFormat**](NetworkWatcherPropertiesFormat.md) |  | [optional] 
**type** | **str** | Network watcher type. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

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


