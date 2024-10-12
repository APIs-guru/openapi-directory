# ReportSchedule

The schedule associated with a report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence** | **str** | The schedule recurrence. | 
**recurrence_period** | [**ReportRecurrencePeriod**](ReportRecurrencePeriod.md) |  | [optional] 
**status** | **str** | The status of the schedule. Whether active or not. If inactive, the report&#39;s scheduled execution is paused. | [optional] 

## Example

```python
from openapi_client.models.report_schedule import ReportSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSchedule from a JSON string
report_schedule_instance = ReportSchedule.from_json(json)
# print the JSON string representation of the object
print(ReportSchedule.to_json())

# convert the object into a dict
report_schedule_dict = report_schedule_instance.to_dict()
# create an instance of ReportSchedule from a dict
report_schedule_from_dict = ReportSchedule.from_dict(report_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


