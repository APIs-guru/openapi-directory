# GoogleAnalyticsAdminV1alphaExpandedDataSetFilter

A specific filter for a single dimension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** | Required. The dimension name to filter. | [optional] 
**in_list_filter** | [**GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter**](GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter.md) |  | [optional] 
**string_filter** | [**GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter**](GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_expanded_data_set_filter import GoogleAnalyticsAdminV1alphaExpandedDataSetFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilter from a JSON string
google_analytics_admin_v1alpha_expanded_data_set_filter_instance = GoogleAnalyticsAdminV1alphaExpandedDataSetFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaExpandedDataSetFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_dict = google_analytics_admin_v1alpha_expanded_data_set_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaExpandedDataSetFilter from a dict
google_analytics_admin_v1alpha_expanded_data_set_filter_from_dict = GoogleAnalyticsAdminV1alphaExpandedDataSetFilter.from_dict(google_analytics_admin_v1alpha_expanded_data_set_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


