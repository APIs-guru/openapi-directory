# PluginCollection

A collection of plugin.  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_entries** | **int** | Count of total objects in the current result set before pagination parameters (limit, offset) are applied.  | [optional] 
**plugins** | [**List[PluginCollectionItem]**](PluginCollectionItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.plugin_collection import PluginCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PluginCollection from a JSON string
plugin_collection_instance = PluginCollection.from_json(json)
# print the JSON string representation of the object
print(PluginCollection.to_json())

# convert the object into a dict
plugin_collection_dict = plugin_collection_instance.to_dict()
# create an instance of PluginCollection from a dict
plugin_collection_from_dict = PluginCollection.from_dict(plugin_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


