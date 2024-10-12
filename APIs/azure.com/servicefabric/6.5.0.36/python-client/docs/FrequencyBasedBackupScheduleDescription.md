# FrequencyBasedBackupScheduleDescription

Describes the frequency based backup schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval** | **str** | Defines the interval with which backups are periodically taken. It should be specified in ISO8601 format. Timespan in seconds is not supported and will be ignored while creating the policy. | 

## Example

```python
from openapi_client.models.frequency_based_backup_schedule_description import FrequencyBasedBackupScheduleDescription

# TODO update the JSON string below
json = "{}"
# create an instance of FrequencyBasedBackupScheduleDescription from a JSON string
frequency_based_backup_schedule_description_instance = FrequencyBasedBackupScheduleDescription.from_json(json)
# print the JSON string representation of the object
print(FrequencyBasedBackupScheduleDescription.to_json())

# convert the object into a dict
frequency_based_backup_schedule_description_dict = frequency_based_backup_schedule_description_instance.to_dict()
# create an instance of FrequencyBasedBackupScheduleDescription from a dict
frequency_based_backup_schedule_description_from_dict = FrequencyBasedBackupScheduleDescription.from_dict(frequency_based_backup_schedule_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


