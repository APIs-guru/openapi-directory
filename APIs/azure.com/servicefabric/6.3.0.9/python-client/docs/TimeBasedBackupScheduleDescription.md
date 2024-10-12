# TimeBasedBackupScheduleDescription

Describes the time based backup schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_days** | [**List[DayOfWeek]**](DayOfWeek.md) | List of days of a week when to trigger the periodic backup. This is valid only when the backup schedule frequency type is weekly. | [optional] 
**run_times** | **List[datetime]** | Represents the list of exact time during the day in ISO8601 format. Like &#39;19:00:00&#39; will represent &#39;7PM&#39; during the day. Date specified along with time will be ignored. | 
**schedule_frequency_type** | [**BackupScheduleFrequencyType**](BackupScheduleFrequencyType.md) |  | 

## Example

```python
from openapi_client.models.time_based_backup_schedule_description import TimeBasedBackupScheduleDescription

# TODO update the JSON string below
json = "{}"
# create an instance of TimeBasedBackupScheduleDescription from a JSON string
time_based_backup_schedule_description_instance = TimeBasedBackupScheduleDescription.from_json(json)
# print the JSON string representation of the object
print(TimeBasedBackupScheduleDescription.to_json())

# convert the object into a dict
time_based_backup_schedule_description_dict = time_based_backup_schedule_description_instance.to_dict()
# create an instance of TimeBasedBackupScheduleDescription from a dict
time_based_backup_schedule_description_from_dict = TimeBasedBackupScheduleDescription.from_dict(time_based_backup_schedule_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


