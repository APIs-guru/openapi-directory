# ReportConfigTimePeriod

The start and end date for pulling data for the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | The start date to pull data from. | 
**to** | **datetime** | The end date to pull data to. | 

## Example

```python
from openapi_client.models.report_config_time_period import ReportConfigTimePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigTimePeriod from a JSON string
report_config_time_period_instance = ReportConfigTimePeriod.from_json(json)
# print the JSON string representation of the object
print(ReportConfigTimePeriod.to_json())

# convert the object into a dict
report_config_time_period_dict = report_config_time_period_instance.to_dict()
# create an instance of ReportConfigTimePeriod from a dict
report_config_time_period_from_dict = ReportConfigTimePeriod.from_dict(report_config_time_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


