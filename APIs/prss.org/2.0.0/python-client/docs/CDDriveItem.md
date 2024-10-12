# CDDriveItem

A generic reference to an item in the CD Drive such as a file or folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.cd_drive_item import CDDriveItem

# TODO update the JSON string below
json = "{}"
# create an instance of CDDriveItem from a JSON string
cd_drive_item_instance = CDDriveItem.from_json(json)
# print the JSON string representation of the object
print(CDDriveItem.to_json())

# convert the object into a dict
cd_drive_item_dict = cd_drive_item_instance.to_dict()
# create an instance of CDDriveItem from a dict
cd_drive_item_from_dict = CDDriveItem.from_dict(cd_drive_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


