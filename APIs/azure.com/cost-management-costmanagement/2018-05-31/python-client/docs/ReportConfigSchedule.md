# ReportConfigSchedule

The schedule associated with a report config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence** | **str** | The schedule recurrence. | 
**recurrence_period** | [**ReportConfigRecurrencePeriod**](ReportConfigRecurrencePeriod.md) |  | 
**status** | **str** | The status of the schedule. Whether active or not. If inactive, the report&#39;s scheduled execution is paused. | [optional] 

## Example

```python
from openapi_client.models.report_config_schedule import ReportConfigSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigSchedule from a JSON string
report_config_schedule_instance = ReportConfigSchedule.from_json(json)
# print the JSON string representation of the object
print(ReportConfigSchedule.to_json())

# convert the object into a dict
report_config_schedule_dict = report_config_schedule_instance.to_dict()
# create an instance of ReportConfigSchedule from a dict
report_config_schedule_from_dict = ReportConfigSchedule.from_dict(report_config_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


