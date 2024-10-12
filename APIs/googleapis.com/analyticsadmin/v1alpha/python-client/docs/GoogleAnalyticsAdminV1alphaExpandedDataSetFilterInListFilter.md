# GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter

A filter for a string dimension that matches a particular list of options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Optional. If true, the match is case-sensitive. If false, the match is case-insensitive. Must be true. | [optional] 
**values** | **List[str]** | Required. The list of possible string values to match against. Must be non-empty. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_expanded_data_set_filter_in_list_filter import GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter from a JSON string
google_analytics_admin_v1alpha_expanded_data_set_filter_in_list_filter_instance = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_in_list_filter_dict = google_analytics_admin_v1alpha_expanded_data_set_filter_in_list_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter from a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_in_list_filter_from_dict = GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter.from_dict(google_analytics_admin_v1alpha_expanded_data_set_filter_in_list_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


