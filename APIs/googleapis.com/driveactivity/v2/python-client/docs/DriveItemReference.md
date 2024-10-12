# DriveItemReference

A lightweight reference to a Drive item, such as a file or folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_file** | **object** | A Drive item which is a file. | [optional] 
**drive_folder** | [**DriveFolder**](DriveFolder.md) |  | [optional] 
**file** | **object** | This item is deprecated; please see &#x60;DriveFile&#x60; instead. | [optional] 
**folder** | [**Folder**](Folder.md) |  | [optional] 
**name** | **str** | The target Drive item. The format is &#x60;items/ITEM_ID&#x60;. | [optional] 
**title** | **str** | The title of the Drive item. | [optional] 

## Example

```python
from openapi_client.models.drive_item_reference import DriveItemReference

# TODO update the JSON string below
json = "{}"
# create an instance of DriveItemReference from a JSON string
drive_item_reference_instance = DriveItemReference.from_json(json)
# print the JSON string representation of the object
print(DriveItemReference.to_json())

# convert the object into a dict
drive_item_reference_dict = drive_item_reference_instance.to_dict()
# create an instance of DriveItemReference from a dict
drive_item_reference_from_dict = DriveItemReference.from_dict(drive_item_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


