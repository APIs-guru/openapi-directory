# GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest

Request for setting the opt out status for the automated GA4 setup process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opt_out** | **bool** | The status to set. | [optional] 
**var_property** | **str** | Required. The UA property to set the opt out status. Note this request uses the internal property ID, not the tracking ID of the form UA-XXXXXX-YY. Format: properties/{internalWebPropertyId} Example: properties/1234 | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_set_automated_ga4_configuration_opt_out_request import GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest from a JSON string
google_analytics_admin_v1alpha_set_automated_ga4_configuration_opt_out_request_instance = GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_set_automated_ga4_configuration_opt_out_request_dict = google_analytics_admin_v1alpha_set_automated_ga4_configuration_opt_out_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest from a dict
google_analytics_admin_v1alpha_set_automated_ga4_configuration_opt_out_request_from_dict = GoogleAnalyticsAdminV1alphaSetAutomatedGa4ConfigurationOptOutRequest.from_dict(google_analytics_admin_v1alpha_set_automated_ga4_configuration_opt_out_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


