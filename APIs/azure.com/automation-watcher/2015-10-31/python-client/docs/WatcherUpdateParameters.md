# WatcherUpdateParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the resource. | [optional] 
**properties** | [**WatcherUpdateProperties**](WatcherUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.watcher_update_parameters import WatcherUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WatcherUpdateParameters from a JSON string
watcher_update_parameters_instance = WatcherUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WatcherUpdateParameters.to_json())

# convert the object into a dict
watcher_update_parameters_dict = watcher_update_parameters_instance.to_dict()
# create an instance of WatcherUpdateParameters from a dict
watcher_update_parameters_from_dict = WatcherUpdateParameters.from_dict(watcher_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


