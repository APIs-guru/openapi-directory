# GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest

Request message for UpdateAccessBinding RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_binding** | [**GoogleAnalyticsAdminV1alphaAccessBinding**](GoogleAnalyticsAdminV1alphaAccessBinding.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_update_access_binding_request import GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest from a JSON string
google_analytics_admin_v1alpha_update_access_binding_request_instance = GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_update_access_binding_request_dict = google_analytics_admin_v1alpha_update_access_binding_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest from a dict
google_analytics_admin_v1alpha_update_access_binding_request_from_dict = GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest.from_dict(google_analytics_admin_v1alpha_update_access_binding_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


