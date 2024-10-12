# GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList

A list of Subproperty event filter expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_expressions** | [**List[GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression]**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression.md) | Required. Unordered list. A list of Subproperty event filter expressions | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_subproperty_event_filter_expression_list import GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList from a JSON string
google_analytics_admin_v1alpha_subproperty_event_filter_expression_list_instance = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_subproperty_event_filter_expression_list_dict = google_analytics_admin_v1alpha_subproperty_event_filter_expression_list_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList from a dict
google_analytics_admin_v1alpha_subproperty_event_filter_expression_list_from_dict = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList.from_dict(google_analytics_admin_v1alpha_subproperty_event_filter_expression_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


