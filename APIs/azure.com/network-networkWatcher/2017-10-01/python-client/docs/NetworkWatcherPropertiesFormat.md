# NetworkWatcherPropertiesFormat

The network watcher properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_watcher_properties_format import NetworkWatcherPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkWatcherPropertiesFormat from a JSON string
network_watcher_properties_format_instance = NetworkWatcherPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(NetworkWatcherPropertiesFormat.to_json())

# convert the object into a dict
network_watcher_properties_format_dict = network_watcher_properties_format_instance.to_dict()
# create an instance of NetworkWatcherPropertiesFormat from a dict
network_watcher_properties_format_from_dict = NetworkWatcherPropertiesFormat.from_dict(network_watcher_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


