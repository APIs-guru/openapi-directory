# GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter

A filter for a string-type dimension that matches a particular pattern.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. | [optional] 
**match_type** | **str** | Required. The match type for the string filter. | [optional] 
**value** | **str** | Required. The string value to be matched against. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_string_filter import GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter from a JSON string
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_string_filter_instance = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_string_filter_dict = google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_string_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter from a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_string_filter_from_dict = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter.from_dict(google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_string_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


