# GoogleAnalyticsAdminV1alphaAccessFilter

An expression to filter dimension or metric values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**between_filter** | [**GoogleAnalyticsAdminV1alphaAccessBetweenFilter**](GoogleAnalyticsAdminV1alphaAccessBetweenFilter.md) |  | [optional] 
**field_name** | **str** | The dimension name or metric name. | [optional] 
**in_list_filter** | [**GoogleAnalyticsAdminV1alphaAccessInListFilter**](GoogleAnalyticsAdminV1alphaAccessInListFilter.md) |  | [optional] 
**numeric_filter** | [**GoogleAnalyticsAdminV1alphaAccessNumericFilter**](GoogleAnalyticsAdminV1alphaAccessNumericFilter.md) |  | [optional] 
**string_filter** | [**GoogleAnalyticsAdminV1alphaAccessStringFilter**](GoogleAnalyticsAdminV1alphaAccessStringFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_filter import GoogleAnalyticsAdminV1alphaAccessFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessFilter from a JSON string
google_analytics_admin_v1alpha_access_filter_instance = GoogleAnalyticsAdminV1alphaAccessFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_filter_dict = google_analytics_admin_v1alpha_access_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessFilter from a dict
google_analytics_admin_v1alpha_access_filter_from_dict = GoogleAnalyticsAdminV1alphaAccessFilter.from_dict(google_analytics_admin_v1alpha_access_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


