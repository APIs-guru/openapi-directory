# ReportSummaryHistogramChartDataBucket

A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Count of items in the bucket. | [optional] 
**lower_bound** | **str** | Lower bound - inclusive. | [optional] 
**upper_bound** | **str** | Upper bound - exclusive. | [optional] 

## Example

```python
from openapi_client.models.report_summary_histogram_chart_data_bucket import ReportSummaryHistogramChartDataBucket

# TODO update the JSON string below
json = "{}"
# create an instance of ReportSummaryHistogramChartDataBucket from a JSON string
report_summary_histogram_chart_data_bucket_instance = ReportSummaryHistogramChartDataBucket.from_json(json)
# print the JSON string representation of the object
print(ReportSummaryHistogramChartDataBucket.to_json())

# convert the object into a dict
report_summary_histogram_chart_data_bucket_dict = report_summary_histogram_chart_data_bucket_instance.to_dict()
# create an instance of ReportSummaryHistogramChartDataBucket from a dict
report_summary_histogram_chart_data_bucket_from_dict = ReportSummaryHistogramChartDataBucket.from_dict(report_summary_histogram_chart_data_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


