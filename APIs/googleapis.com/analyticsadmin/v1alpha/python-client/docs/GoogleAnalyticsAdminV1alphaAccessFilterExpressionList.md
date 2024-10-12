# GoogleAnalyticsAdminV1alphaAccessFilterExpressionList

A list of filter expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expressions** | [**List[GoogleAnalyticsAdminV1alphaAccessFilterExpression]**](GoogleAnalyticsAdminV1alphaAccessFilterExpression.md) | A list of filter expressions. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_filter_expression_list import GoogleAnalyticsAdminV1alphaAccessFilterExpressionList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessFilterExpressionList from a JSON string
google_analytics_admin_v1alpha_access_filter_expression_list_instance = GoogleAnalyticsAdminV1alphaAccessFilterExpressionList.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessFilterExpressionList.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_filter_expression_list_dict = google_analytics_admin_v1alpha_access_filter_expression_list_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessFilterExpressionList from a dict
google_analytics_admin_v1alpha_access_filter_expression_list_from_dict = GoogleAnalyticsAdminV1alphaAccessFilterExpressionList.from_dict(google_analytics_admin_v1alpha_access_filter_expression_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


