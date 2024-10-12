# GoogleAnalyticsAdminV1betaCustomMetric

A definition for a custom metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description for this custom dimension. Max length of 150 characters. | [optional] 
**display_name** | **str** | Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. | [optional] 
**measurement_unit** | **str** | Required. The type for the custom metric&#39;s value. | [optional] 
**name** | **str** | Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} | [optional] [readonly] 
**parameter_name** | **str** | Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics. | [optional] 
**restricted_metric_type** | **List[str]** | Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit. | [optional] 
**scope** | **str** | Required. Immutable. The scope of this custom metric. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_custom_metric import GoogleAnalyticsAdminV1betaCustomMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaCustomMetric from a JSON string
google_analytics_admin_v1beta_custom_metric_instance = GoogleAnalyticsAdminV1betaCustomMetric.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaCustomMetric.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_custom_metric_dict = google_analytics_admin_v1beta_custom_metric_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaCustomMetric from a dict
google_analytics_admin_v1beta_custom_metric_from_dict = GoogleAnalyticsAdminV1betaCustomMetric.from_dict(google_analytics_admin_v1beta_custom_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


