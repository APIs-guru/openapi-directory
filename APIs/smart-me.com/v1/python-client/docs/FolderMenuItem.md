# FolderMenuItem

A folder menu item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_export_settings** | [**AutoExportSettings**](AutoExportSettings.md) |  | [optional] 
**children** | [**List[FolderMenuItem]**](FolderMenuItem.md) | Children folder menu items (sub folder menu items) | [optional] 
**description** | **str** | The Description of the folder | [optional] 
**folder_type** | **str** | The folder type of the item | [optional] 
**icon** | **str** | The path to the Icon of this folder | [optional] 
**id** | **str** | The id of the folder menu item | [optional] 
**meter_serial_number** | **str** | The serial number if the folder menu item is a meter.               Serial number is handled as a string, as javascript on client side cannot handle long integers properly. | [optional] 
**name** | **str** | The Name of the item | [optional] 
**user_id** | **str** | The ID of the user of this folder (only for foldertype user) | [optional] 

## Example

```python
from openapi_client.models.folder_menu_item import FolderMenuItem

# TODO update the JSON string below
json = "{}"
# create an instance of FolderMenuItem from a JSON string
folder_menu_item_instance = FolderMenuItem.from_json(json)
# print the JSON string representation of the object
print(FolderMenuItem.to_json())

# convert the object into a dict
folder_menu_item_dict = folder_menu_item_instance.to_dict()
# create an instance of FolderMenuItem from a dict
folder_menu_item_from_dict = FolderMenuItem.from_dict(folder_menu_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


