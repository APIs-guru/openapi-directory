# BackupScheduleProperties

The properties of the backup schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_type** | **str** | The type of backup which needs to be taken. | 
**last_successful_run** | **datetime** | The last successful backup run which was triggered for the schedule. | [optional] [readonly] 
**retention_count** | **int** | The number of backups to be retained. | 
**schedule_recurrence** | [**ScheduleRecurrence**](ScheduleRecurrence.md) |  | 
**schedule_status** | **str** | The schedule status. | 
**start_time** | **datetime** | The start time of the schedule. | 

## Example

```python
from openapi_client.models.backup_schedule_properties import BackupScheduleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupScheduleProperties from a JSON string
backup_schedule_properties_instance = BackupScheduleProperties.from_json(json)
# print the JSON string representation of the object
print(BackupScheduleProperties.to_json())

# convert the object into a dict
backup_schedule_properties_dict = backup_schedule_properties_instance.to_dict()
# create an instance of BackupScheduleProperties from a dict
backup_schedule_properties_from_dict = BackupScheduleProperties.from_dict(backup_schedule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


