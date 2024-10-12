# GoogleAnalyticsAdminV1alphaListCustomMetricsResponse

Response message for ListCustomMetrics RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_metrics** | [**List[GoogleAnalyticsAdminV1alphaCustomMetric]**](GoogleAnalyticsAdminV1alphaCustomMetric.md) | List of CustomMetrics. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_custom_metrics_response import GoogleAnalyticsAdminV1alphaListCustomMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListCustomMetricsResponse from a JSON string
google_analytics_admin_v1alpha_list_custom_metrics_response_instance = GoogleAnalyticsAdminV1alphaListCustomMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListCustomMetricsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_custom_metrics_response_dict = google_analytics_admin_v1alpha_list_custom_metrics_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListCustomMetricsResponse from a dict
google_analytics_admin_v1alpha_list_custom_metrics_response_from_dict = GoogleAnalyticsAdminV1alphaListCustomMetricsResponse.from_dict(google_analytics_admin_v1alpha_list_custom_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


