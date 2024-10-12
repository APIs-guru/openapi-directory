# GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter

A filter for numeric or date values on a dimension or metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | Required. The operation applied to a numeric filter. | [optional] 
**value** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_numeric_filter import GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter from a JSON string
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_numeric_filter_instance = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_numeric_filter_dict = google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_numeric_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter from a dict
google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_numeric_filter_from_dict = GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter.from_dict(google_analytics_admin_v1alpha_audience_dimension_or_metric_filter_numeric_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


