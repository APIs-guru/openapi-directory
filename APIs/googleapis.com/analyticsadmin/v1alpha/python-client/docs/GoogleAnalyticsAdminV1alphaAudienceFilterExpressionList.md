# GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList

A list of Audience filter expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_expressions** | [**List[GoogleAnalyticsAdminV1alphaAudienceFilterExpression]**](GoogleAnalyticsAdminV1alphaAudienceFilterExpression.md) | A list of Audience filter expressions. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_audience_filter_expression_list import GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList from a JSON string
google_analytics_admin_v1alpha_audience_filter_expression_list_instance = GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_audience_filter_expression_list_dict = google_analytics_admin_v1alpha_audience_filter_expression_list_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList from a dict
google_analytics_admin_v1alpha_audience_filter_expression_list_from_dict = GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList.from_dict(google_analytics_admin_v1alpha_audience_filter_expression_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


