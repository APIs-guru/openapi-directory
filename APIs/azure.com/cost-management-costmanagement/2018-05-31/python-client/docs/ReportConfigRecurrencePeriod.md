# ReportConfigRecurrencePeriod

The start and end date for recurrence schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | The start date of recurrence. | 
**to** | **datetime** | The end date of recurrence. If not provided, we default this to 10 years from the start date. | [optional] 

## Example

```python
from openapi_client.models.report_config_recurrence_period import ReportConfigRecurrencePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigRecurrencePeriod from a JSON string
report_config_recurrence_period_instance = ReportConfigRecurrencePeriod.from_json(json)
# print the JSON string representation of the object
print(ReportConfigRecurrencePeriod.to_json())

# convert the object into a dict
report_config_recurrence_period_dict = report_config_recurrence_period_instance.to_dict()
# create an instance of ReportConfigRecurrencePeriod from a dict
report_config_recurrence_period_from_dict = ReportConfigRecurrencePeriod.from_dict(report_config_recurrence_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


