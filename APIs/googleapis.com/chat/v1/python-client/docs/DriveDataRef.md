# DriveDataRef

A reference to the data of a drive attachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_file_id** | **str** | The ID for the drive file. Use with the Drive API. | [optional] 

## Example

```python
from openapi_client.models.drive_data_ref import DriveDataRef

# TODO update the JSON string below
json = "{}"
# create an instance of DriveDataRef from a JSON string
drive_data_ref_instance = DriveDataRef.from_json(json)
# print the JSON string representation of the object
print(DriveDataRef.to_json())

# convert the object into a dict
drive_data_ref_dict = drive_data_ref_instance.to_dict()
# create an instance of DriveDataRef from a dict
drive_data_ref_from_dict = DriveDataRef.from_dict(drive_data_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


