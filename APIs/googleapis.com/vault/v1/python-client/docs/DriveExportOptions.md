# DriveExportOptions

Options for Drive exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_access_info** | **bool** | To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**. | [optional] 

## Example

```python
from openapi_client.models.drive_export_options import DriveExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DriveExportOptions from a JSON string
drive_export_options_instance = DriveExportOptions.from_json(json)
# print the JSON string representation of the object
print(DriveExportOptions.to_json())

# convert the object into a dict
drive_export_options_dict = drive_export_options_instance.to_dict()
# create an instance of DriveExportOptions from a dict
drive_export_options_from_dict = DriveExportOptions.from_dict(drive_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


