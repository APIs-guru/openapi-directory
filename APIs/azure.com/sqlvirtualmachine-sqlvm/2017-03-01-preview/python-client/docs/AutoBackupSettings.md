# AutoBackupSettings

Configure backups for databases in your SQL virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_schedule_type** | **str** | Backup schedule type. | [optional] 
**backup_system_dbs** | **bool** | Include or exclude system databases from auto backup. | [optional] 
**enable** | **bool** | Enable or disable autobackup on SQL virtual machine. | [optional] 
**enable_encryption** | **bool** | Enable or disable encryption for backup on SQL virtual machine. | [optional] 
**full_backup_frequency** | **str** | Frequency of full backups. In both cases, full backups begin during the next scheduled time window. | [optional] 
**full_backup_start_time** | **int** | Start time of a given day during which full backups can take place. 0-23 hours. | [optional] 
**full_backup_window_hours** | **int** | Duration of the time window of a given day during which full backups can take place. 1-23 hours. | [optional] 
**log_backup_frequency** | **int** | Frequency of log backups. 5-60 minutes. | [optional] 
**password** | **str** | Password for encryption on backup. | [optional] 
**retention_period** | **int** | Retention period of backup: 1-30 days. | [optional] 
**storage_access_key** | **str** | Storage account key where backup will be taken to. | [optional] 
**storage_account_url** | **str** | Storage account url where backup will be taken to. | [optional] 

## Example

```python
from openapi_client.models.auto_backup_settings import AutoBackupSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AutoBackupSettings from a JSON string
auto_backup_settings_instance = AutoBackupSettings.from_json(json)
# print the JSON string representation of the object
print(AutoBackupSettings.to_json())

# convert the object into a dict
auto_backup_settings_dict = auto_backup_settings_instance.to_dict()
# create an instance of AutoBackupSettings from a dict
auto_backup_settings_from_dict = AutoBackupSettings.from_dict(auto_backup_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


