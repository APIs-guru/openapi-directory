# GoogleAnalyticsAdminV1alphaAccessFilterExpression

Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_filter** | [**GoogleAnalyticsAdminV1alphaAccessFilter**](GoogleAnalyticsAdminV1alphaAccessFilter.md) |  | [optional] 
**and_group** | [**GoogleAnalyticsAdminV1alphaAccessFilterExpressionList**](GoogleAnalyticsAdminV1alphaAccessFilterExpressionList.md) |  | [optional] 
**not_expression** | [**GoogleAnalyticsAdminV1alphaAccessFilterExpression**](GoogleAnalyticsAdminV1alphaAccessFilterExpression.md) |  | [optional] 
**or_group** | [**GoogleAnalyticsAdminV1alphaAccessFilterExpressionList**](GoogleAnalyticsAdminV1alphaAccessFilterExpressionList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_filter_expression import GoogleAnalyticsAdminV1alphaAccessFilterExpression

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessFilterExpression from a JSON string
google_analytics_admin_v1alpha_access_filter_expression_instance = GoogleAnalyticsAdminV1alphaAccessFilterExpression.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessFilterExpression.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_filter_expression_dict = google_analytics_admin_v1alpha_access_filter_expression_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessFilterExpression from a dict
google_analytics_admin_v1alpha_access_filter_expression_from_dict = GoogleAnalyticsAdminV1alphaAccessFilterExpression.from_dict(google_analytics_admin_v1alpha_access_filter_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


