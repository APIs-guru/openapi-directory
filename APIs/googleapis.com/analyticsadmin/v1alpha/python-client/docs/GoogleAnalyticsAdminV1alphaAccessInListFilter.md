# GoogleAnalyticsAdminV1alphaAccessInListFilter

The result needs to be in a list of string values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | If true, the string value is case sensitive. | [optional] 
**values** | **List[str]** | The list of string values. Must be non-empty. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_in_list_filter import GoogleAnalyticsAdminV1alphaAccessInListFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessInListFilter from a JSON string
google_analytics_admin_v1alpha_access_in_list_filter_instance = GoogleAnalyticsAdminV1alphaAccessInListFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessInListFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_in_list_filter_dict = google_analytics_admin_v1alpha_access_in_list_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessInListFilter from a dict
google_analytics_admin_v1alpha_access_in_list_filter_from_dict = GoogleAnalyticsAdminV1alphaAccessInListFilter.from_dict(google_analytics_admin_v1alpha_access_in_list_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


