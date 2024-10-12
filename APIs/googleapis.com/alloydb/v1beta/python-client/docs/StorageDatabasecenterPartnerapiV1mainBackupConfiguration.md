# StorageDatabasecenterPartnerapiV1mainBackupConfiguration

Configuration for automatic backups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automated_backup_enabled** | **bool** | Whether customer visible automated backups are enabled on the instance. | [optional] 
**backup_retention_settings** | [**StorageDatabasecenterPartnerapiV1mainRetentionSettings**](StorageDatabasecenterPartnerapiV1mainRetentionSettings.md) |  | [optional] 
**point_in_time_recovery_enabled** | **bool** | Whether point-in-time recovery is enabled. This is optional field, if the database service does not have this feature or metadata is not available in control plane, this can be omitted. | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_backup_configuration import StorageDatabasecenterPartnerapiV1mainBackupConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainBackupConfiguration from a JSON string
storage_databasecenter_partnerapi_v1main_backup_configuration_instance = StorageDatabasecenterPartnerapiV1mainBackupConfiguration.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainBackupConfiguration.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_backup_configuration_dict = storage_databasecenter_partnerapi_v1main_backup_configuration_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainBackupConfiguration from a dict
storage_databasecenter_partnerapi_v1main_backup_configuration_from_dict = StorageDatabasecenterPartnerapiV1mainBackupConfiguration.from_dict(storage_databasecenter_partnerapi_v1main_backup_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


