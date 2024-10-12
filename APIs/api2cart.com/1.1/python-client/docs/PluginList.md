# PluginList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**all_plugins** | **int** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**plugins** | [**List[Plugin]**](Plugin.md) |  | [optional] 

## Example

```python
from openapi_client.models.plugin_list import PluginList

# TODO update the JSON string below
json = "{}"
# create an instance of PluginList from a JSON string
plugin_list_instance = PluginList.from_json(json)
# print the JSON string representation of the object
print(PluginList.to_json())

# convert the object into a dict
plugin_list_dict = plugin_list_instance.to_dict()
# create an instance of PluginList from a dict
plugin_list_from_dict = PluginList.from_dict(plugin_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


