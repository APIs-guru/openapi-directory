# BackupConfiguration

Database instance backup configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_retention_settings** | [**BackupRetentionSettings**](BackupRetentionSettings.md) |  | [optional] 
**binary_log_enabled** | **bool** | (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well. | [optional] 
**enabled** | **bool** | Whether this configuration is enabled. | [optional] 
**kind** | **str** | This is always &#x60;sql#backupConfiguration&#x60;. | [optional] 
**location** | **str** | Location of the backup | [optional] 
**point_in_time_recovery_enabled** | **bool** | Whether point in time recovery is enabled. | [optional] 
**replication_log_archiving_enabled** | **bool** | Reserved for future use. | [optional] 
**start_time** | **str** | Start time for the daily backup configuration in UTC timezone in the 24 hour format - &#x60;HH:MM&#x60;. | [optional] 
**transaction_log_retention_days** | **int** | The number of days of transaction logs we retain for point in time restore, from 1-7. | [optional] 

## Example

```python
from openapi_client.models.backup_configuration import BackupConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BackupConfiguration from a JSON string
backup_configuration_instance = BackupConfiguration.from_json(json)
# print the JSON string representation of the object
print(BackupConfiguration.to_json())

# convert the object into a dict
backup_configuration_dict = backup_configuration_instance.to_dict()
# create an instance of BackupConfiguration from a dict
backup_configuration_from_dict = BackupConfiguration.from_dict(backup_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


