# YearlyRetentionSchedule

Yearly retention schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**months_of_year** | **List[str]** | List of months of year of yearly retention policy. | [optional] 
**retention_duration** | [**RetentionDuration**](RetentionDuration.md) |  | [optional] 
**retention_schedule_daily** | [**DailyRetentionFormat**](DailyRetentionFormat.md) |  | [optional] 
**retention_schedule_format_type** | **str** | Retention schedule format for yearly retention policy. | [optional] 
**retention_schedule_weekly** | [**WeeklyRetentionFormat**](WeeklyRetentionFormat.md) |  | [optional] 
**retention_times** | **List[datetime]** | Retention times of retention policy. | [optional] 

## Example

```python
from openapi_client.models.yearly_retention_schedule import YearlyRetentionSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of YearlyRetentionSchedule from a JSON string
yearly_retention_schedule_instance = YearlyRetentionSchedule.from_json(json)
# print the JSON string representation of the object
print(YearlyRetentionSchedule.to_json())

# convert the object into a dict
yearly_retention_schedule_dict = yearly_retention_schedule_instance.to_dict()
# create an instance of YearlyRetentionSchedule from a dict
yearly_retention_schedule_from_dict = YearlyRetentionSchedule.from_dict(yearly_retention_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


