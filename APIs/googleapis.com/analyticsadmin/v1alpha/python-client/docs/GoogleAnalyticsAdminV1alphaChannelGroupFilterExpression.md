# GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression

A logical expression of Channel Group dimension filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**and_group** | [**GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList**](GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList.md) |  | [optional] 
**filter** | [**GoogleAnalyticsAdminV1alphaChannelGroupFilter**](GoogleAnalyticsAdminV1alphaChannelGroupFilter.md) |  | [optional] 
**not_expression** | [**GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression**](GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression.md) |  | [optional] 
**or_group** | [**GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList**](GoogleAnalyticsAdminV1alphaChannelGroupFilterExpressionList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_channel_group_filter_expression import GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression from a JSON string
google_analytics_admin_v1alpha_channel_group_filter_expression_instance = GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_channel_group_filter_expression_dict = google_analytics_admin_v1alpha_channel_group_filter_expression_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression from a dict
google_analytics_admin_v1alpha_channel_group_filter_expression_from_dict = GoogleAnalyticsAdminV1alphaChannelGroupFilterExpression.from_dict(google_analytics_admin_v1alpha_channel_group_filter_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


