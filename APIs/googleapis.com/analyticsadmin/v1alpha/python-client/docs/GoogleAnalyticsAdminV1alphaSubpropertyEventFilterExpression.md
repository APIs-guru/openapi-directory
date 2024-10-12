# GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression

A logical expression of Subproperty event filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_condition** | [**GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilterCondition.md) |  | [optional] 
**not_expression** | [**GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression.md) |  | [optional] 
**or_group** | [**GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpressionList.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_subproperty_event_filter_expression import GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression from a JSON string
google_analytics_admin_v1alpha_subproperty_event_filter_expression_instance = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_subproperty_event_filter_expression_dict = google_analytics_admin_v1alpha_subproperty_event_filter_expression_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression from a dict
google_analytics_admin_v1alpha_subproperty_event_filter_expression_from_dict = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression.from_dict(google_analytics_admin_v1alpha_subproperty_event_filter_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


