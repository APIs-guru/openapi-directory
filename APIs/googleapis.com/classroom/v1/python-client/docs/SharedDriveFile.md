# SharedDriveFile

Drive file that is used as material for course work.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_file** | [**DriveFile**](DriveFile.md) |  | [optional] 
**share_mode** | **str** | Mechanism by which students access the Drive item. | [optional] 

## Example

```python
from openapi_client.models.shared_drive_file import SharedDriveFile

# TODO update the JSON string below
json = "{}"
# create an instance of SharedDriveFile from a JSON string
shared_drive_file_instance = SharedDriveFile.from_json(json)
# print the JSON string representation of the object
print(SharedDriveFile.to_json())

# convert the object into a dict
shared_drive_file_dict = shared_drive_file_instance.to_dict()
# create an instance of SharedDriveFile from a dict
shared_drive_file_from_dict = SharedDriveFile.from_dict(shared_drive_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


