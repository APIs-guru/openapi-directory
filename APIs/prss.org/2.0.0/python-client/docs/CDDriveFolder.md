# CDDriveFolder

A folder in the CD Drive that can contain other items such as files or folders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** | The date and time the folder was created. | 
**id** | **int** | The ID of the folder. | 
**last_modified_date** | **str** | The date and time the folder was last modified. This may only represent a modification to to the folder metadata itself, not to the contents of the folder. | 
**name** | **str** | The name of the folder. | 
**parent_id** | **int** | The ID of the parent folder or 0 for the root folder. | 

## Example

```python
from openapi_client.models.cd_drive_folder import CDDriveFolder

# TODO update the JSON string below
json = "{}"
# create an instance of CDDriveFolder from a JSON string
cd_drive_folder_instance = CDDriveFolder.from_json(json)
# print the JSON string representation of the object
print(CDDriveFolder.to_json())

# convert the object into a dict
cd_drive_folder_dict = cd_drive_folder_instance.to_dict()
# create an instance of CDDriveFolder from a dict
cd_drive_folder_from_dict = CDDriveFolder.from_dict(cd_drive_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


