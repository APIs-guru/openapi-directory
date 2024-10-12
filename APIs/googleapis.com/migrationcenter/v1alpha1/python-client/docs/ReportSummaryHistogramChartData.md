# ReportSummaryHistogramChartData

A Histogram Chart shows a distribution of values into buckets, showing a count of values which fall into a bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[ReportSummaryHistogramChartDataBucket]**](ReportSummaryHistogramChartDataBucket.md) | Buckets in the histogram. There will be &#x60;n+1&#x60; buckets matching &#x60;n&#x60; lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity. | [optional] 

## Example

```python
from openapi_client.models.report_summary_histogram_chart_data import ReportSummaryHistogramChartData

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryHistogramChartData from a JSON string
report_summary_histogram_chart_data_instance = ReportSummaryHistogramChartData.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryHistogramChartData.to_json())

# convert the object into a dict
report_summary_histogram_chart_data_dict = report_summary_histogram_chart_data_instance.to_dict()
# create an instance of ReportSummaryHistogramChartData from a dict
report_summary_histogram_chart_data_from_dict = ReportSummaryHistogramChartData.from_dict(report_summary_histogram_chart_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


