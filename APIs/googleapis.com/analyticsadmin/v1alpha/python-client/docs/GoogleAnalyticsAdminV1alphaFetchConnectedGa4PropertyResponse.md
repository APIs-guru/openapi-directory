# GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse

Response for looking up GA4 property connected to a UA property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | **str** | The GA4 property connected to the UA property. An empty string is returned when there is no connected GA4 property. Format: properties/{property_id} Example: properties/1234 | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_fetch_connected_ga4_property_response import GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse from a JSON string
google_analytics_admin_v1alpha_fetch_connected_ga4_property_response_instance = GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_fetch_connected_ga4_property_response_dict = google_analytics_admin_v1alpha_fetch_connected_ga4_property_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse from a dict
google_analytics_admin_v1alpha_fetch_connected_ga4_property_response_from_dict = GoogleAnalyticsAdminV1alphaFetchConnectedGa4PropertyResponse.from_dict(google_analytics_admin_v1alpha_fetch_connected_ga4_property_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


