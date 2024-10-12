# GoogleAnalyticsAdminV1alphaAudienceFilterExpression

A logical expression of Audience dimension, metric, or event filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**and_group** | [**GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList**](GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList.md) |  | [optional] 
**dimension_or_metric_filter** | [**GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter**](GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.md) |  | [optional] 
**event_filter** | [**GoogleAnalyticsAdminV1alphaAudienceEventFilter**](GoogleAnalyticsAdminV1alphaAudienceEventFilter.md) |  | [optional] 
**not_expression** | [**GoogleAnalyticsAdminV1alphaAudienceFilterExpression**](GoogleAnalyticsAdminV1alphaAudienceFilterExpression.md) |  | [optional] 
**or_group** | [**GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList**](GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_filter_expression import GoogleAnalyticsAdminV1alphaAudienceFilterExpression

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceFilterExpression from a JSON string
google_analytics_admin_v1alpha_audience_filter_expression_instance = GoogleAnalyticsAdminV1alphaAudienceFilterExpression.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceFilterExpression.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_filter_expression_dict = google_analytics_admin_v1alpha_audience_filter_expression_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceFilterExpression from a dict
google_analytics_admin_v1alpha_audience_filter_expression_from_dict = GoogleAnalyticsAdminV1alphaAudienceFilterExpression.from_dict(google_analytics_admin_v1alpha_audience_filter_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


