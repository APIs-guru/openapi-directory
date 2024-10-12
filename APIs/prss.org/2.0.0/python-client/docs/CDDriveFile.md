# CDDriveFile

A file in the CD Drive that contains content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** | The date and time the file was created. | 
**id** | **int** | The ID of the file. | 
**last_modified_date** | **str** | The date and time the file was last modified. | 
**name** | **str** | The name of the file including the extension. | 
**parent_id** | **int** | The ID of the parent folder or 0 for the root folder. | 
**size** | **int** | The size of the file in bytes. | [optional] 

## Example

```python
from openapi_client.models.cd_drive_file import CDDriveFile

# TODO update the JSON string below
json = "{}"
# create an instance of CDDriveFile from a JSON string
cd_drive_file_instance = CDDriveFile.from_json(json)
# print the JSON string representation of the object
print(CDDriveFile.to_json())

# convert the object into a dict
cd_drive_file_dict = cd_drive_file_instance.to_dict()
# create an instance of CDDriveFile from a dict
cd_drive_file_from_dict = CDDriveFile.from_dict(cd_drive_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


