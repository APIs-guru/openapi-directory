# ScheduleWorkPattern


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**even_weeks** | [**ScheduleWorkPatternEvenWeeks**](ScheduleWorkPatternEvenWeeks.md) |  | [optional] 
**odd_weeks** | [**ScheduleWorkPatternEvenWeeks**](ScheduleWorkPatternEvenWeeks.md) |  | [optional] 

## Example

```python
from openapi_client.models.schedule_work_pattern import ScheduleWorkPattern

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleWorkPattern from a JSON string
schedule_work_pattern_instance = ScheduleWorkPattern.from_json(json)
# print the JSON string representation of the object
print(ScheduleWorkPattern.to_json())

# convert the object into a dict
schedule_work_pattern_dict = schedule_work_pattern_instance.to_dict()
# create an instance of ScheduleWorkPattern from a dict
schedule_work_pattern_from_dict = ScheduleWorkPattern.from_dict(schedule_work_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


