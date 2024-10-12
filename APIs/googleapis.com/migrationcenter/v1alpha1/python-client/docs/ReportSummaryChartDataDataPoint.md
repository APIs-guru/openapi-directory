# ReportSummaryChartDataDataPoint

Describes a single data point in the Chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The X-axis label for this data point. | [optional] 
**value** | **float** | The Y-axis value for this data point. | [optional] 

## Example

```python
from openapi_client.models.report_summary_chart_data_data_point import ReportSummaryChartDataDataPoint

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryChartDataDataPoint from a JSON string
report_summary_chart_data_data_point_instance = ReportSummaryChartDataDataPoint.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryChartDataDataPoint.to_json())

# convert the object into a dict
report_summary_chart_data_data_point_dict = report_summary_chart_data_data_point_instance.to_dict()
# create an instance of ReportSummaryChartDataDataPoint from a dict
report_summary_chart_data_data_point_from_dict = ReportSummaryChartDataDataPoint.from_dict(report_summary_chart_data_data_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


