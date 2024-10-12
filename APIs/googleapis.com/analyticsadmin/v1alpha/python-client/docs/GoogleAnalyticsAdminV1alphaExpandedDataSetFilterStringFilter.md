# GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter

A filter for a string-type dimension that matches a particular pattern.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true when match_type is EXACT. Must be false when match_type is CONTAINS. | [optional] 
**match_type** | **str** | Required. The match type for the string filter. | [optional] 
**value** | **str** | Required. The string value to be matched against. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_expanded_data_set_filter_string_filter import GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter from a JSON string
google_analytics_admin_v1alpha_expanded_data_set_filter_string_filter_instance = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_string_filter_dict = google_analytics_admin_v1alpha_expanded_data_set_filter_string_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter from a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_string_filter_from_dict = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter.from_dict(google_analytics_admin_v1alpha_expanded_data_set_filter_string_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


