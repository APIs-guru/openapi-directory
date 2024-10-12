# ReportSummaryChartData

Describes a collection of data points rendered as a Chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_points** | [**List[ReportSummaryChartDataDataPoint]**](ReportSummaryChartDataDataPoint.md) | Each data point in the chart is represented as a name-value pair with the name being the x-axis label, and the value being the y-axis value. | [optional] 

## Example

```python
from openapi_client.models.report_summary_chart_data import ReportSummaryChartData

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryChartData from a JSON string
report_summary_chart_data_instance = ReportSummaryChartData.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryChartData.to_json())

# convert the object into a dict
report_summary_chart_data_dict = report_summary_chart_data_instance.to_dict()
# create an instance of ReportSummaryChartData from a dict
report_summary_chart_data_from_dict = ReportSummaryChartData.from_dict(report_summary_chart_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


