# ReportSummaryUtilizationChartData

Utilization Chart is a specific type of visualization which displays a metric classified into \"Used\" and \"Free\" buckets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free** | **str** | Aggregate value which falls into the \&quot;Free\&quot; bucket. | [optional] 
**used** | **str** | Aggregate value which falls into the \&quot;Used\&quot; bucket. | [optional] 

## Example

```python
from openapi_client.models.report_summary_utilization_chart_data import ReportSummaryUtilizationChartData

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryUtilizationChartData from a JSON string
report_summary_utilization_chart_data_instance = ReportSummaryUtilizationChartData.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryUtilizationChartData.to_json())

# convert the object into a dict
report_summary_utilization_chart_data_dict = report_summary_utilization_chart_data_instance.to_dict()
# create an instance of ReportSummaryUtilizationChartData from a dict
report_summary_utilization_chart_data_from_dict = ReportSummaryUtilizationChartData.from_dict(report_summary_utilization_chart_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


