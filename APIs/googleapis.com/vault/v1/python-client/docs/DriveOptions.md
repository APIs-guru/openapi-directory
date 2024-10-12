# DriveOptions

Additional options for Drive search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_side_encrypted_option** | **str** | Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p&#x3D;cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive. | [optional] 
**include_shared_drives** | **bool** | Set to **true** to include shared drives. | [optional] 
**include_team_drives** | **bool** | Set to true to include Team Drive. | [optional] 
**version_date** | **str** | Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. | [optional] 

## Example

```python
from openapi_client.models.drive_options import DriveOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DriveOptions from a JSON string
drive_options_instance = DriveOptions.from_json(json)
# print the JSON string representation of the object
print(DriveOptions.to_json())

# convert the object into a dict
drive_options_dict = drive_options_instance.to_dict()
# create an instance of DriveOptions from a dict
drive_options_from_dict = DriveOptions.from_dict(drive_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


