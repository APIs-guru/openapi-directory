# DailyRetentionSchedule

Daily retention schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_duration** | [**RetentionDuration**](RetentionDuration.md) |  | [optional] 
**retention_times** | **List[datetime]** | The retention times of retention policy. | [optional] 

## Example

```python
from openapi_client.models.daily_retention_schedule import DailyRetentionSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of DailyRetentionSchedule from a JSON string
daily_retention_schedule_instance = DailyRetentionSchedule.from_json(json)
# print the JSON string representation of the object
print(DailyRetentionSchedule.to_json())

# convert the object into a dict
daily_retention_schedule_dict = daily_retention_schedule_instance.to_dict()
# create an instance of DailyRetentionSchedule from a dict
daily_retention_schedule_from_dict = DailyRetentionSchedule.from_dict(daily_retention_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


