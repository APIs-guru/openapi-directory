# WeeklyRetentionSchedule

Weekly retention schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_of_the_week** | **List[str]** | List of the days of the week for the weekly retention policy. | [optional] 
**retention_duration** | [**RetentionDuration**](RetentionDuration.md) |  | [optional] 
**retention_times** | **List[datetime]** | Retention times of the retention policy. | [optional] 

## Example

```python
from openapi_client.models.weekly_retention_schedule import WeeklyRetentionSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of WeeklyRetentionSchedule from a JSON string
weekly_retention_schedule_instance = WeeklyRetentionSchedule.from_json(json)
# print the JSON string representation of the object
print(WeeklyRetentionSchedule.to_json())

# convert the object into a dict
weekly_retention_schedule_dict = weekly_retention_schedule_instance.to_dict()
# create an instance of WeeklyRetentionSchedule from a dict
weekly_retention_schedule_from_dict = WeeklyRetentionSchedule.from_dict(weekly_retention_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


