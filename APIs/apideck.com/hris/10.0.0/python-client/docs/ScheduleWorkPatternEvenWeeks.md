# ScheduleWorkPatternEvenWeeks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours_friday** | **float** |  | [optional] 
**hours_monday** | **float** |  | [optional] 
**hours_saturday** | **float** |  | [optional] 
**hours_sunday** | **float** |  | [optional] 
**hours_thursday** | **float** |  | [optional] 
**hours_tuesday** | **float** |  | [optional] 
**hours_wednesday** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.schedule_work_pattern_even_weeks import ScheduleWorkPatternEvenWeeks

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleWorkPatternEvenWeeks from a JSON string
schedule_work_pattern_even_weeks_instance = ScheduleWorkPatternEvenWeeks.from_json(json)
# print the JSON string representation of the object
print(ScheduleWorkPatternEvenWeeks.to_json())

# convert the object into a dict
schedule_work_pattern_even_weeks_dict = schedule_work_pattern_even_weeks_instance.to_dict()
# create an instance of ScheduleWorkPatternEvenWeeks from a dict
schedule_work_pattern_even_weeks_from_dict = ScheduleWorkPatternEvenWeeks.from_dict(schedule_work_pattern_even_weeks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


