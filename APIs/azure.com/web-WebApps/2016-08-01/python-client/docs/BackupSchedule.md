# BackupSchedule

Description of a backup schedule. Describes how often should be the backup performed and what should be the retention policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency_interval** | **int** | How often the backup should be executed (e.g. for weekly backup, this should be set to 7 and FrequencyUnit should be set to Day) | [default to 7]
**frequency_unit** | **str** | The unit of time for how often the backup should be executed (e.g. for weekly backup, this should be set to Day and FrequencyInterval should be set to 7) | [default to 'Day']
**keep_at_least_one_backup** | **bool** | True if the retention policy should always keep at least one backup in the storage account, regardless how old it is; false otherwise. | [default to True]
**last_execution_time** | **datetime** | Last time when this schedule was triggered. | [optional] [readonly] 
**retention_period_in_days** | **int** | After how many days backups should be deleted. | [default to 30]
**start_time** | **datetime** | When the schedule should start working. | [optional] 

## Example

```python
from openapi_client.models.backup_schedule import BackupSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of BackupSchedule from a JSON string
backup_schedule_instance = BackupSchedule.from_json(json)
# print the JSON string representation of the object
print(BackupSchedule.to_json())

# convert the object into a dict
backup_schedule_dict = backup_schedule_instance.to_dict()
# create an instance of BackupSchedule from a dict
backup_schedule_from_dict = BackupSchedule.from_dict(backup_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


