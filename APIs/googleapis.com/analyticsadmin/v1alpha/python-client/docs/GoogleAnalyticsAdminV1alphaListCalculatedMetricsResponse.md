# GoogleAnalyticsAdminV1alphaListCalculatedMetricsResponse

Response message for ListCalculatedMetrics RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculated_metrics** | [**List[GoogleAnalyticsAdminV1alphaCalculatedMetric]**](GoogleAnalyticsAdminV1alphaCalculatedMetric.md) | List of CalculatedMetrics. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_calculated_metrics_response import GoogleAnalyticsAdminV1alphaListCalculatedMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListCalculatedMetricsResponse from a JSON string
google_analytics_admin_v1alpha_list_calculated_metrics_response_instance = GoogleAnalyticsAdminV1alphaListCalculatedMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListCalculatedMetricsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_calculated_metrics_response_dict = google_analytics_admin_v1alpha_list_calculated_metrics_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListCalculatedMetricsResponse from a dict
google_analytics_admin_v1alpha_list_calculated_metrics_response_from_dict = GoogleAnalyticsAdminV1alphaListCalculatedMetricsResponse.from_dict(google_analytics_admin_v1alpha_list_calculated_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


