# ScheduledBackup

This specifies the configuration of scheduled backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_location** | **str** | Optional. A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing backup files will be stored below it. | [optional] 
**cron_schedule** | **str** | Optional. The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups. | [optional] 
**enabled** | **bool** | Optional. Defines whether the scheduled backup is enabled. The default value is false. | [optional] 
**latest_backup** | [**LatestBackup**](LatestBackup.md) |  | [optional] 
**next_scheduled_time** | **str** | Output only. The time when the next backups execution is scheduled to start. | [optional] [readonly] 
**time_zone** | **str** | Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC. | [optional] 

## Example

```python
from openapi_client.models.scheduled_backup import ScheduledBackup

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledBackup from a JSON string
scheduled_backup_instance = ScheduledBackup.from_json(json)
# print the JSON string representation of the object
print(ScheduledBackup.to_json())

# convert the object into a dict
scheduled_backup_dict = scheduled_backup_instance.to_dict()
# create an instance of ScheduledBackup from a dict
scheduled_backup_from_dict = ScheduledBackup.from_dict(scheduled_backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


