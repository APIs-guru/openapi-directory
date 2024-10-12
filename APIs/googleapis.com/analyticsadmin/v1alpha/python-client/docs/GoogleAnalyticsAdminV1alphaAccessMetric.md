# GoogleAnalyticsAdminV1alphaAccessMetric

The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_name** | **str** | The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in &#x60;metricFilter&#x60; &amp; &#x60;orderBys&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_metric import GoogleAnalyticsAdminV1alphaAccessMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessMetric from a JSON string
google_analytics_admin_v1alpha_access_metric_instance = GoogleAnalyticsAdminV1alphaAccessMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessMetric.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_metric_dict = google_analytics_admin_v1alpha_access_metric_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessMetric from a dict
google_analytics_admin_v1alpha_access_metric_from_dict = GoogleAnalyticsAdminV1alphaAccessMetric.from_dict(google_analytics_admin_v1alpha_access_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


