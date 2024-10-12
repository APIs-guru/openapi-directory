# DriveFile

Representation of a Google Drive file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | URL that can be used to access the Drive item. Read-only. | [optional] 
**id** | **str** | Drive API resource ID. | [optional] 
**thumbnail_url** | **str** | URL of a thumbnail image of the Drive item. Read-only. | [optional] 
**title** | **str** | Title of the Drive item. Read-only. | [optional] 

## Example

```python
from openapi_client.models.drive_file import DriveFile

# TODO update the JSON string below
json = "{}"
# create an instance of DriveFile from a JSON string
drive_file_instance = DriveFile.from_json(json)
# print the JSON string representation of the object
print(DriveFile.to_json())

# convert the object into a dict
drive_file_dict = drive_file_instance.to_dict()
# create an instance of DriveFile from a dict
drive_file_from_dict = DriveFile.from_dict(drive_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


