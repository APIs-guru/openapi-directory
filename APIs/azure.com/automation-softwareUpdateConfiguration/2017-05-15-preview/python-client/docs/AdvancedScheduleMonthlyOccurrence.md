# AdvancedScheduleMonthlyOccurrence

The properties of the create advanced schedule monthly occurrence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **str** | Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. | [optional] 
**occurrence** | **int** | Occurrence of the week within the month. Must be between 1 and 5 | [optional] 

## Example

```python
from openapi_client.models.advanced_schedule_monthly_occurrence import AdvancedScheduleMonthlyOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedScheduleMonthlyOccurrence from a JSON string
advanced_schedule_monthly_occurrence_instance = AdvancedScheduleMonthlyOccurrence.from_json(json)
# print the JSON string representation of the object
print(AdvancedScheduleMonthlyOccurrence.to_json())

# convert the object into a dict
advanced_schedule_monthly_occurrence_dict = advanced_schedule_monthly_occurrence_instance.to_dict()
# create an instance of AdvancedScheduleMonthlyOccurrence from a dict
advanced_schedule_monthly_occurrence_from_dict = AdvancedScheduleMonthlyOccurrence.from_dict(advanced_schedule_monthly_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


