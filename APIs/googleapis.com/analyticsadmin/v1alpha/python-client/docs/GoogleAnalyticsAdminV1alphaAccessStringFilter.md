# GoogleAnalyticsAdminV1alphaAccessStringFilter

The filter for strings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | If true, the string value is case sensitive. | [optional] 
**match_type** | **str** | The match type for this filter. | [optional] 
**value** | **str** | The string value used for the matching. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_string_filter import GoogleAnalyticsAdminV1alphaAccessStringFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessStringFilter from a JSON string
google_analytics_admin_v1alpha_access_string_filter_instance = GoogleAnalyticsAdminV1alphaAccessStringFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessStringFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_string_filter_dict = google_analytics_admin_v1alpha_access_string_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessStringFilter from a dict
google_analytics_admin_v1alpha_access_string_filter_from_dict = GoogleAnalyticsAdminV1alphaAccessStringFilter.from_dict(google_analytics_admin_v1alpha_access_string_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


