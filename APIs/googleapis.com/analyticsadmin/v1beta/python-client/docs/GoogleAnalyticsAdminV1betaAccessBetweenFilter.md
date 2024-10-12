# GoogleAnalyticsAdminV1betaAccessBetweenFilter

To express that the result needs to be between two numbers (inclusive).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_value** | [**GoogleAnalyticsAdminV1betaNumericValue**](GoogleAnalyticsAdminV1betaNumericValue.md) |  | [optional] 
**to_value** | [**GoogleAnalyticsAdminV1betaNumericValue**](GoogleAnalyticsAdminV1betaNumericValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_between_filter import GoogleAnalyticsAdminV1betaAccessBetweenFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessBetweenFilter from a JSON string
google_analytics_admin_v1beta_access_between_filter_instance = GoogleAnalyticsAdminV1betaAccessBetweenFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessBetweenFilter.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_between_filter_dict = google_analytics_admin_v1beta_access_between_filter_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessBetweenFilter from a dict
google_analytics_admin_v1beta_access_between_filter_from_dict = GoogleAnalyticsAdminV1betaAccessBetweenFilter.from_dict(google_analytics_admin_v1beta_access_between_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


