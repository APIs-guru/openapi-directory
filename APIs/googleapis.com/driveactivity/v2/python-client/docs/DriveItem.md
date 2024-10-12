# DriveItem

A Drive item, such as a file or folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_file** | **object** | A Drive item which is a file. | [optional] 
**drive_folder** | [**DriveFolder**](DriveFolder.md) |  | [optional] 
**file** | **object** | This item is deprecated; please see &#x60;DriveFile&#x60; instead. | [optional] 
**folder** | [**Folder**](Folder.md) |  | [optional] 
**mime_type** | **str** | The MIME type of the Drive item. See https://developers.google.com/drive/v3/web/mime-types. | [optional] 
**name** | **str** | The target Drive item. The format is &#x60;items/ITEM_ID&#x60;. | [optional] 
**owner** | [**Owner**](Owner.md) |  | [optional] 
**title** | **str** | The title of the Drive item. | [optional] 

## Example

```python
from openapi_client.models.drive_item import DriveItem

# TODO update the JSON string below
json = "{}"
# create an instance of DriveItem from a JSON string
drive_item_instance = DriveItem.from_json(json)
# print the JSON string representation of the object
print(DriveItem.to_json())

# convert the object into a dict
drive_item_dict = drive_item_instance.to_dict()
# create an instance of DriveItem from a dict
drive_item_from_dict = DriveItem.from_dict(drive_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


