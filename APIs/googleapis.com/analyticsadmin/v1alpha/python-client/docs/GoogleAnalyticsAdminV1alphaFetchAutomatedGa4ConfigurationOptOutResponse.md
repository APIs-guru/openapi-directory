# GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse

Response message for fetching the opt out status for the automated GA4 setup process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opt_out** | **bool** | The opt out status for the UA property. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_fetch_automated_ga4_configuration_opt_out_response import GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse from a JSON string
google_analytics_admin_v1alpha_fetch_automated_ga4_configuration_opt_out_response_instance = GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_fetch_automated_ga4_configuration_opt_out_response_dict = google_analytics_admin_v1alpha_fetch_automated_ga4_configuration_opt_out_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse from a dict
google_analytics_admin_v1alpha_fetch_automated_ga4_configuration_opt_out_response_from_dict = GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse.from_dict(google_analytics_admin_v1alpha_fetch_automated_ga4_configuration_opt_out_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


