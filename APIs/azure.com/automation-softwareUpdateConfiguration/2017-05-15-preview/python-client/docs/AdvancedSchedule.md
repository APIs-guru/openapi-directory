# AdvancedSchedule

The properties of the create Advanced Schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**month_days** | **List[int]** | Days of the month that the job should execute on. Must be between 1 and 31. | [optional] 
**monthly_occurrences** | [**List[AdvancedScheduleMonthlyOccurrence]**](AdvancedScheduleMonthlyOccurrence.md) | Occurrences of days within a month. | [optional] 
**week_days** | **List[str]** | Days of the week that the job should execute on. | [optional] 

## Example

```python
from openapi_client.models.advanced_schedule import AdvancedSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedSchedule from a JSON string
advanced_schedule_instance = AdvancedSchedule.from_json(json)
# print the JSON string representation of the object
print(AdvancedSchedule.to_json())

# convert the object into a dict
advanced_schedule_dict = advanced_schedule_instance.to_dict()
# create an instance of AdvancedSchedule from a dict
advanced_schedule_from_dict = AdvancedSchedule.from_dict(advanced_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


