# GoogleAnalyticsAdminV1betaAccessFilter

An expression to filter dimension or metric values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**between_filter** | [**GoogleAnalyticsAdminV1betaAccessBetweenFilter**](GoogleAnalyticsAdminV1betaAccessBetweenFilter.md) |  | [optional] 
**field_name** | **str** | The dimension name or metric name. | [optional] 
**in_list_filter** | [**GoogleAnalyticsAdminV1betaAccessInListFilter**](GoogleAnalyticsAdminV1betaAccessInListFilter.md) |  | [optional] 
**numeric_filter** | [**GoogleAnalyticsAdminV1betaAccessNumericFilter**](GoogleAnalyticsAdminV1betaAccessNumericFilter.md) |  | [optional] 
**string_filter** | [**GoogleAnalyticsAdminV1betaAccessStringFilter**](GoogleAnalyticsAdminV1betaAccessStringFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_filter import GoogleAnalyticsAdminV1betaAccessFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessFilter from a JSON string
google_analytics_admin_v1beta_access_filter_instance = GoogleAnalyticsAdminV1betaAccessFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_filter_dict = google_analytics_admin_v1beta_access_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessFilter from a dict
google_analytics_admin_v1beta_access_filter_from_dict = GoogleAnalyticsAdminV1betaAccessFilter.from_dict(google_analytics_admin_v1beta_access_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


