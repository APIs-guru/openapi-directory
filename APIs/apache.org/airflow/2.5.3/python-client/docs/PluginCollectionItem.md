# PluginCollectionItem

A plugin Item.  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appbuilder_menu_items** | **List[Optional[object]]** | The Flask Appbuilder menu items | [optional] 
**appbuilder_views** | **List[Optional[object]]** | The appuilder views | [optional] 
**executors** | **List[Optional[str]]** | The plugin executors | [optional] 
**flask_blueprints** | **List[Optional[object]]** | The flask blueprints | [optional] 
**global_operator_extra_links** | **List[Optional[object]]** | The global operator extra links | [optional] 
**hooks** | **List[Optional[str]]** | The plugin hooks | [optional] 
**macros** | **List[Optional[object]]** | The plugin macros | [optional] 
**name** | **str** | The name of the plugin | [optional] 
**operator_extra_links** | **List[Optional[object]]** | Operator extra links | [optional] 
**source** | **str** | The plugin source | [optional] 

## Example

```python
from openapi_client.models.plugin_collection_item import PluginCollectionItem

# TODO update the JSON string below
json = "{}"
# create an instance of PluginCollectionItem from a JSON string
plugin_collection_item_instance = PluginCollectionItem.from_json(json)
# print the JSON string representation of the object
print(PluginCollectionItem.to_json())

# convert the object into a dict
plugin_collection_item_dict = plugin_collection_item_instance.to_dict()
# create an instance of PluginCollectionItem from a dict
plugin_collection_item_from_dict = PluginCollectionItem.from_dict(plugin_collection_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


