# BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner

Backup status for a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_name** | **str** | Name of the role. | [optional] 
**status** | **str** | Status of an operation. | [optional] 

## Example

```python
from openapi_client.models.backup_locations_create_backup200_response_properties_backup_info_role_status_inner import BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner

# TODO update the JSON string below
json = "{}"
# create an instance of BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner from a JSON string
backup_locations_create_backup200_response_properties_backup_info_role_status_inner_instance = BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner.from_json(json)
# print the JSON string representation of the object
print(BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner.to_json())

# convert the object into a dict
backup_locations_create_backup200_response_properties_backup_info_role_status_inner_dict = backup_locations_create_backup200_response_properties_backup_info_role_status_inner_instance.to_dict()
# create an instance of BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner from a dict
backup_locations_create_backup200_response_properties_backup_info_role_status_inner_from_dict = BackupLocationsCreateBackup200ResponsePropertiesBackupInfoRoleStatusInner.from_dict(backup_locations_create_backup200_response_properties_backup_info_role_status_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


