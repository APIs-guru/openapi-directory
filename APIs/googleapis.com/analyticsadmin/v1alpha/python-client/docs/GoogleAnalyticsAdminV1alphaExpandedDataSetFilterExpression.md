# GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression

A logical expression of EnhancedDataSet dimension filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**and_group** | [**GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList**](GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList.md) |  | [optional] 
**filter** | [**GoogleAnalyticsAdminV1alphaExpandedDataSetFilter**](GoogleAnalyticsAdminV1alphaExpandedDataSetFilter.md) |  | [optional] 
**not_expression** | [**GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression**](GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_expanded_data_set_filter_expression import GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression from a JSON string
google_analytics_admin_v1alpha_expanded_data_set_filter_expression_instance = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_expression_dict = google_analytics_admin_v1alpha_expanded_data_set_filter_expression_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression from a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_expression_from_dict = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression.from_dict(google_analytics_admin_v1alpha_expanded_data_set_filter_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


