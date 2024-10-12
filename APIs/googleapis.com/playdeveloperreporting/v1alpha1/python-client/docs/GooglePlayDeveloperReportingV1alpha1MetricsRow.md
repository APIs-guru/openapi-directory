# GooglePlayDeveloperReportingV1alpha1MetricsRow

Represents a row of dimensions and metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_period** | **str** | Granularity of the aggregation period of the row. | [optional] 
**dimensions** | [**List[GooglePlayDeveloperReportingV1alpha1DimensionValue]**](GooglePlayDeveloperReportingV1alpha1DimensionValue.md) | Dimension columns in the row. | [optional] 
**metrics** | [**List[GooglePlayDeveloperReportingV1alpha1MetricValue]**](GooglePlayDeveloperReportingV1alpha1MetricValue.md) | Metric columns in the row. | [optional] 
**start_time** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_metrics_row import GooglePlayDeveloperReportingV1alpha1MetricsRow

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1MetricsRow from a JSON string
google_play_developer_reporting_v1alpha1_metrics_row_instance = GooglePlayDeveloperReportingV1alpha1MetricsRow.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1MetricsRow.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_metrics_row_dict = google_play_developer_reporting_v1alpha1_metrics_row_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1MetricsRow from a dict
google_play_developer_reporting_v1alpha1_metrics_row_from_dict = GooglePlayDeveloperReportingV1alpha1MetricsRow.from_dict(google_play_developer_reporting_v1alpha1_metrics_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


