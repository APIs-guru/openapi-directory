# RecurrenceScheduleOccurrence

The recurrence schedule occurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | [**DayOfWeek**](DayOfWeek.md) |  | [optional] 
**occurrence** | **int** | The occurrence. | [optional] 

## Example

```python
from openapi_client.models.recurrence_schedule_occurrence import RecurrenceScheduleOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of RecurrenceScheduleOccurrence from a JSON string
recurrence_schedule_occurrence_instance = RecurrenceScheduleOccurrence.from_json(json)
# print the JSON string representation of the object
print(RecurrenceScheduleOccurrence.to_json())

# convert the object into a dict
recurrence_schedule_occurrence_dict = recurrence_schedule_occurrence_instance.to_dict()
# create an instance of RecurrenceScheduleOccurrence from a dict
recurrence_schedule_occurrence_from_dict = RecurrenceScheduleOccurrence.from_dict(recurrence_schedule_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


