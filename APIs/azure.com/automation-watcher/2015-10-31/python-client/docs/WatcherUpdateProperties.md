# WatcherUpdateProperties

The properties of the update watcher operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_frequency_in_seconds** | **int** | Gets or sets the frequency at which the watcher is invoked. | [optional] 

## Example

```python
from openapi_client.models.watcher_update_properties import WatcherUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WatcherUpdateProperties from a JSON string
watcher_update_properties_instance = WatcherUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(WatcherUpdateProperties.to_json())

# convert the object into a dict
watcher_update_properties_dict = watcher_update_properties_instance.to_dict()
# create an instance of WatcherUpdateProperties from a dict
watcher_update_properties_from_dict = WatcherUpdateProperties.from_dict(watcher_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


