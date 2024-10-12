# GoogleAnalyticsAdminV1alphaAccessNumericFilter

Filters for numeric or date values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | The operation type for this filter. | [optional] 
**value** | [**GoogleAnalyticsAdminV1alphaNumericValue**](GoogleAnalyticsAdminV1alphaNumericValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_numeric_filter import GoogleAnalyticsAdminV1alphaAccessNumericFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessNumericFilter from a JSON string
google_analytics_admin_v1alpha_access_numeric_filter_instance = GoogleAnalyticsAdminV1alphaAccessNumericFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessNumericFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_numeric_filter_dict = google_analytics_admin_v1alpha_access_numeric_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessNumericFilter from a dict
google_analytics_admin_v1alpha_access_numeric_filter_from_dict = GoogleAnalyticsAdminV1alphaAccessNumericFilter.from_dict(google_analytics_admin_v1alpha_access_numeric_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


