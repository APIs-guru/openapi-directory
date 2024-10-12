# GoogleAnalyticsAdminV1alphaAccessMetricHeader

Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | The metric&#39;s name; for example &#39;accessCount&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_metric_header import GoogleAnalyticsAdminV1alphaAccessMetricHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessMetricHeader from a JSON string
google_analytics_admin_v1alpha_access_metric_header_instance = GoogleAnalyticsAdminV1alphaAccessMetricHeader.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessMetricHeader.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_metric_header_dict = google_analytics_admin_v1alpha_access_metric_header_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessMetricHeader from a dict
google_analytics_admin_v1alpha_access_metric_header_from_dict = GoogleAnalyticsAdminV1alphaAccessMetricHeader.from_dict(google_analytics_admin_v1alpha_access_metric_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


