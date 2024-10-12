# GoogleAnalyticsAdminV1alphaSubpropertyEventFilter

A resource message representing a GA4 Subproperty event filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_property** | **str** | Immutable. Resource name of the Subproperty that uses this filter. | [optional] 
**filter_clauses** | [**List[GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause]**](GoogleAnalyticsAdminV1alphaSubpropertyEventFilterClause.md) | Required. Unordered list. Filter clauses that define the SubpropertyEventFilter. All clauses are AND&#39;ed together to determine what data is sent to the subproperty. | [optional] 
**name** | **str** | Output only. Format: properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter} Example: properties/1234/subpropertyEventFilters/5678 | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_subproperty_event_filter import GoogleAnalyticsAdminV1alphaSubpropertyEventFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilter from a JSON string
google_analytics_admin_v1alpha_subproperty_event_filter_instance = GoogleAnalyticsAdminV1alphaSubpropertyEventFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSubpropertyEventFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_subproperty_event_filter_dict = google_analytics_admin_v1alpha_subproperty_event_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilter from a dict
google_analytics_admin_v1alpha_subproperty_event_filter_from_dict = GoogleAnalyticsAdminV1alphaSubpropertyEventFilter.from_dict(google_analytics_admin_v1alpha_subproperty_event_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


