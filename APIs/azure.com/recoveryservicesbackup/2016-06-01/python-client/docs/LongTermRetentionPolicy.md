# LongTermRetentionPolicy

Long-term retention policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_schedule** | [**DailyRetentionSchedule**](DailyRetentionSchedule.md) |  | [optional] 
**monthly_schedule** | [**MonthlyRetentionSchedule**](MonthlyRetentionSchedule.md) |  | [optional] 
**weekly_schedule** | [**WeeklyRetentionSchedule**](WeeklyRetentionSchedule.md) |  | [optional] 
**yearly_schedule** | [**YearlyRetentionSchedule**](YearlyRetentionSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.long_term_retention_policy import LongTermRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermRetentionPolicy from a JSON string
long_term_retention_policy_instance = LongTermRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(LongTermRetentionPolicy.to_json())

# convert the object into a dict
long_term_retention_policy_dict = long_term_retention_policy_instance.to_dict()
# create an instance of LongTermRetentionPolicy from a dict
long_term_retention_policy_from_dict = LongTermRetentionPolicy.from_dict(long_term_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


