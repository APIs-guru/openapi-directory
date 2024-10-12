# GoogleAnalyticsAdminV1betaAccessFilterExpression

Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_filter** | [**GoogleAnalyticsAdminV1betaAccessFilter**](GoogleAnalyticsAdminV1betaAccessFilter.md) |  | [optional] 
**and_group** | [**GoogleAnalyticsAdminV1betaAccessFilterExpressionList**](GoogleAnalyticsAdminV1betaAccessFilterExpressionList.md) |  | [optional] 
**not_expression** | [**GoogleAnalyticsAdminV1betaAccessFilterExpression**](GoogleAnalyticsAdminV1betaAccessFilterExpression.md) |  | [optional] 
**or_group** | [**GoogleAnalyticsAdminV1betaAccessFilterExpressionList**](GoogleAnalyticsAdminV1betaAccessFilterExpressionList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_filter_expression import GoogleAnalyticsAdminV1betaAccessFilterExpression

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessFilterExpression from a JSON string
google_analytics_admin_v1beta_access_filter_expression_instance = GoogleAnalyticsAdminV1betaAccessFilterExpression.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessFilterExpression.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_filter_expression_dict = google_analytics_admin_v1beta_access_filter_expression_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessFilterExpression from a dict
google_analytics_admin_v1beta_access_filter_expression_from_dict = GoogleAnalyticsAdminV1betaAccessFilterExpression.from_dict(google_analytics_admin_v1beta_access_filter_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


