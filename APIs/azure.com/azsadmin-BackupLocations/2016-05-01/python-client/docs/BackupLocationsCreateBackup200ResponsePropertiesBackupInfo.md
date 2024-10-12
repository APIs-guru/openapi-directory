# BackupLocationsCreateBackup200ResponsePropertiesBackupInfo

Holds information for a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_data_version** | **str** | Version of the backup data. | [optional] [readonly] 
**backup_id** | **str** | Unique GUID for the backup. | [optional] [readonly] 
**created_date_time** | **datetime** | Creation time of the backup. | [optional] [readonly] 
**deployment_id** | **str** | Deployment Id of the stamp. | [optional] [readonly] 
**oem_version** | **str** | OEM version. | [optional] [readonly] 
**role_status** | [**List[BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner]**](BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner.md) | object | [optional] 
**stamp_version** | **str** | Current version. | [optional] [readonly] 
**status** | **str** | Status of an operation. | [optional] 
**time_taken_to_create** | **str** | Duration to create the backup. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_locations_create_backup200_response_properties_backup_info import BackupLocationsCreateBackup200ResponsePropertiesBackupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLocationsCreateBackup200ResponsePropertiesBackupInfo from a JSON string
backup_locations_create_backup200_response_properties_backup_info_instance = BackupLocationsCreateBackup200ResponsePropertiesBackupInfo.from_json(json)
# print the JSON string representation of the object
print(BackupLocationsCreateBackup200ResponsePropertiesBackupInfo.to_json())

# convert the object into a dict
backup_locations_create_backup200_response_properties_backup_info_dict = backup_locations_create_backup200_response_properties_backup_info_instance.to_dict()
# create an instance of BackupLocationsCreateBackup200ResponsePropertiesBackupInfo from a dict
backup_locations_create_backup200_response_properties_backup_info_from_dict = BackupLocationsCreateBackup200ResponsePropertiesBackupInfo.from_dict(backup_locations_create_backup200_response_properties_backup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


