# GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter

A filter for a string-type dimension that matches a particular pattern.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Optional. If true, the string value is case sensitive. If false, the match is case-insensitive. | [optional] 
**match_type** | **str** | Required. The match type for the string filter. | [optional] 
**value** | **str** | Required. The string value used for the matching. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_subproperty_event_filter_condition_string_filter import GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter from a JSON string
google_analytics_admin_v1alpha_subproperty_event_filter_condition_string_filter_instance = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_subproperty_event_filter_condition_string_filter_dict = google_analytics_admin_v1alpha_subproperty_event_filter_condition_string_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter from a dict
google_analytics_admin_v1alpha_subproperty_event_filter_condition_string_filter_from_dict = GoogleAnalyticsAdminV1alphaSubpropertyEventFilterConditionStringFilter.from_dict(google_analytics_admin_v1alpha_subproperty_event_filter_condition_string_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


