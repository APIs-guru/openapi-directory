# GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause

A clause for defining a filter. A filter may be inclusive (events satisfying the filter clause are included in the subproperty's data) or exclusive (events satisfying the filter clause are excluded from the subproperty's data).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_clause_type** | **str** | Required. The type for the filter clause. | [optional] 
**filter_expression** | [**GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilterExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_subproperty_event_filter_clause import GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause from a JSON string
google_analytics_admin_v1alpha_subproperty_event_filter_clause_instance = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_subproperty_event_filter_clause_dict = google_analytics_admin_v1alpha_subproperty_event_filter_clause_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause from a dict
google_analytics_admin_v1alpha_subproperty_event_filter_clause_from_dict = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause.from_dict(google_analytics_admin_v1alpha_subproperty_event_filter_clause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


