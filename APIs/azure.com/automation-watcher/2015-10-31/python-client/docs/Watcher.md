# Watcher

Definition of the watcher type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the etag of the resource. | [optional] 
**properties** | [**WatcherProperties**](WatcherProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.watcher import Watcher

# TODO update the JSON string below
json = "{}"
# create an instance of Watcher from a JSON string
watcher_instance = Watcher.from_json(json)
# print the JSON string representation of the object
print(Watcher.to_json())

# convert the object into a dict
watcher_dict = watcher_instance.to_dict()
# create an instance of Watcher from a dict
watcher_from_dict = Watcher.from_dict(watcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


