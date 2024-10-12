# ReportRecurrencePeriod

The start and end date for recurrence schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | The start date of recurrence. | 
**to** | **datetime** | The end date of recurrence. | [optional] 

## Example

```python
from openapi_client.models.report_recurrence_period import ReportRecurrencePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRecurrencePeriod from a JSON string
report_recurrence_period_instance = ReportRecurrencePeriod.from_json(json)
# print the JSON string representation of the object
print(ReportRecurrencePeriod.to_json())

# convert the object into a dict
report_recurrence_period_dict = report_recurrence_period_instance.to_dict()
# create an instance of ReportRecurrencePeriod from a dict
report_recurrence_period_from_dict = ReportRecurrencePeriod.from_dict(report_recurrence_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


