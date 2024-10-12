# GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter

A specific filter for a single dimension or metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at_any_point_in_time** | **bool** | Optional. Indicates whether this filter needs dynamic evaluation or not. If set to true, users join the Audience if they ever met the condition (static evaluation). If unset or set to false, user evaluation for an Audience is dynamic; users are added to an Audience when they meet the conditions and then removed when they no longer meet them. This can only be set when Audience scope is ACROSS_ALL_SESSIONS. | [optional] 
**between_filter** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter.md) |  | [optional] 
**field_name** | **str** | Required. Immutable. The dimension name or metric name to filter. If the field name refers to a custom dimension or metric, a scope prefix will be added to the front of the custom dimensions or metric name. For more on scope prefixes or custom dimensions/metrics, reference the [Google Analytics Data API documentation] (https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#custom_dimensions). | [optional] 
**in_any_n_day_period** | **int** | Optional. If set, specifies the time window for which to evaluate data in number of days. If not set, then audience data is evaluated against lifetime data (For example, infinite time window). For example, if set to 1 day, only the current day&#39;s data is evaluated. The reference point is the current day when at_any_point_in_time is unset or false. It can only be set when Audience scope is ACROSS_ALL_SESSIONS and cannot be greater than 60 days. | [optional] 
**in_list_filter** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter.md) |  | [optional] 
**numeric_filter** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter.md) |  | [optional] 
**string_filter** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_dimension_or_metric_filter import GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter from a JSON string
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_instance = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_dict = google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter from a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_from_dict = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.from_dict(google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


