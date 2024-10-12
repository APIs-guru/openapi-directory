# GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter

A filter for numeric or date values between certain values on a dimension or metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_value** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue.md) |  | [optional] 
**to_value** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_between_filter import GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter from a JSON string
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_between_filter_instance = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_between_filter_dict = google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_between_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter from a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_between_filter_from_dict = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter.from_dict(google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_between_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


