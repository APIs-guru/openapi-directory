# BackupLocationsCreateBackup200ResponseProperties

Properties for a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_info** | [**BackupLocationsCreateBackup200ResponsePropertiesBackupInfo**](BackupLocationsCreateBackup200ResponsePropertiesBackupInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.backup_locations_create_backup200_response_properties import BackupLocationsCreateBackup200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLocationsCreateBackup200ResponseProperties from a JSON string
backup_locations_create_backup200_response_properties_instance = BackupLocationsCreateBackup200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(BackupLocationsCreateBackup200ResponseProperties.to_json())

# convert the object into a dict
backup_locations_create_backup200_response_properties_dict = backup_locations_create_backup200_response_properties_instance.to_dict()
# create an instance of BackupLocationsCreateBackup200ResponseProperties from a dict
backup_locations_create_backup200_response_properties_from_dict = BackupLocationsCreateBackup200ResponseProperties.from_dict(backup_locations_create_backup200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


