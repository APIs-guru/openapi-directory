# FolderMenuConfiguration

Container Class for the Web API representing a folder menu and it's items

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser_time_zone_name** | **str** | The time zone name taken from the browser | [optional] 
**browser_utc_time** | **str** | The UTC time taken from the browser | [optional] 
**items** | [**List[FolderMenuItem]**](FolderMenuItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.folder_menu_configuration import FolderMenuConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FolderMenuConfiguration from a JSON string
folder_menu_configuration_instance = FolderMenuConfiguration.from_json(json)
# print the JSON string representation of the object
print(FolderMenuConfiguration.to_json())

# convert the object into a dict
folder_menu_configuration_dict = folder_menu_configuration_instance.to_dict()
# create an instance of FolderMenuConfiguration from a dict
folder_menu_configuration_from_dict = FolderMenuConfiguration.from_dict(folder_menu_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


