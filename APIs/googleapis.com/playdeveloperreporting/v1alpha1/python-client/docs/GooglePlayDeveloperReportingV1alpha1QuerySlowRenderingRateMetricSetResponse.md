# GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse

Response message for QuerySlowRenderingRateMetricSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token to fetch the next page of data. | [optional] 
**rows** | [**List[GooglePlayDeveloperReportingV1alpha1MetricsRow]**](GooglePlayDeveloperReportingV1alpha1MetricsRow.md) | Returned rows of data. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_query_slow_rendering_rate_metric_set_response import GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse from a JSON string
google_play_developer_reporting_v1alpha1_query_slow_rendering_rate_metric_set_response_instance = GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_query_slow_rendering_rate_metric_set_response_dict = google_play_developer_reporting_v1alpha1_query_slow_rendering_rate_metric_set_response_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse from a dict
google_play_developer_reporting_v1alpha1_query_slow_rendering_rate_metric_set_response_from_dict = GooglePlayDeveloperReportingV1alpha1QuerySlowRenderingRateMetricSetResponse.from_dict(google_play_developer_reporting_v1alpha1_query_slow_rendering_rate_metric_set_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


