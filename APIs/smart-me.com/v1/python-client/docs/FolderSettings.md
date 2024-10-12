# FolderSettings

Container for the folder settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The Description of the folder or meter | [optional] 
**enable** | **bool** | Flag if the meter is enabled (folder not supported yet) | [optional] 
**folder_type** | **str** | The Type of the folder | [optional] 
**name** | **str** | The Name of the folder or meter | [optional] 
**parent_folder_id** | **str** | The parent folder ID of this item | [optional] 
**serial_number** | **int** | The serial number (meter only) | [optional] 
**useable_for_virtual_billing_meters** | **bool** | Flag if the meter is usable for virtual billing meters (e.g. washroom) | [optional] 
**value_correction** | **float** | The value correction on this meter | [optional] 
**value_correction_parent_folder** | **float** | The value correction on all parent folders. but not on the meter itself | [optional] 
**visualization_name** | **str** | The name of the visualization of the folder | [optional] 

## Example

```python
from openapi_client.models.folder_settings import FolderSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FolderSettings from a JSON string
folder_settings_instance = FolderSettings.from_json(json)
# print the JSON string representation of the object
print(FolderSettings.to_json())

# convert the object into a dict
folder_settings_dict = folder_settings_instance.to_dict()
# create an instance of FolderSettings from a dict
folder_settings_from_dict = FolderSettings.from_dict(folder_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


