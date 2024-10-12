# RecurrenceSchedule

The recurrence schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **List[int]** | The hours. | [optional] 
**minutes** | **List[int]** | The minutes. | [optional] 
**month_days** | **List[int]** | The month days. | [optional] 
**monthly_occurrences** | [**List[RecurrenceScheduleOccurrence]**](RecurrenceScheduleOccurrence.md) | The monthly occurrences. | [optional] 
**week_days** | **List[str]** | The days of the week. | [optional] 

## Example

```python
from openapi_client.models.recurrence_schedule import RecurrenceSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of RecurrenceSchedule from a JSON string
recurrence_schedule_instance = RecurrenceSchedule.from_json(json)
# print the JSON string representation of the object
print(RecurrenceSchedule.to_json())

# convert the object into a dict
recurrence_schedule_dict = recurrence_schedule_instance.to_dict()
# create an instance of RecurrenceSchedule from a dict
recurrence_schedule_from_dict = RecurrenceSchedule.from_dict(recurrence_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


