# DriveFolder

A Drive item which is a folder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of Drive folder. | [optional] 

## Example

```python
from openapi_client.models.drive_folder import DriveFolder

# TODO update the JSON string below
json = "{}"
# create an instance of DriveFolder from a JSON string
drive_folder_instance = DriveFolder.from_json(json)
# print the JSON string representation of the object
print(DriveFolder.to_json())

# convert the object into a dict
drive_folder_dict = drive_folder_instance.to_dict()
# create an instance of DriveFolder from a dict
drive_folder_from_dict = DriveFolder.from_dict(drive_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


