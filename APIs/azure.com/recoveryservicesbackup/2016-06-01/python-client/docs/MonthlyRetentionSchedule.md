# MonthlyRetentionSchedule

The monthly retention schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_duration** | [**RetentionDuration**](RetentionDuration.md) |  | [optional] 
**retention_schedule_daily** | [**DailyRetentionFormat**](DailyRetentionFormat.md) |  | [optional] 
**retention_schedule_format_type** | **str** | Retention schedule format type for monthly retention policy. | [optional] 
**retention_schedule_weekly** | [**WeeklyRetentionFormat**](WeeklyRetentionFormat.md) |  | [optional] 
**retention_times** | **List[datetime]** | Retention times of the retention policy. | [optional] 

## Example

```python
from openapi_client.models.monthly_retention_schedule import MonthlyRetentionSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of MonthlyRetentionSchedule from a JSON string
monthly_retention_schedule_instance = MonthlyRetentionSchedule.from_json(json)
# print the JSON string representation of the object
print(MonthlyRetentionSchedule.to_json())

# convert the object into a dict
monthly_retention_schedule_dict = monthly_retention_schedule_instance.to_dict()
# create an instance of MonthlyRetentionSchedule from a dict
monthly_retention_schedule_from_dict = MonthlyRetentionSchedule.from_dict(monthly_retention_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


