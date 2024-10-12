# GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest

Request message for DeleteAccessBinding RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_delete_access_binding_request import GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest from a JSON string
google_analytics_admin_v1alpha_delete_access_binding_request_instance = GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_delete_access_binding_request_dict = google_analytics_admin_v1alpha_delete_access_binding_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest from a dict
google_analytics_admin_v1alpha_delete_access_binding_request_from_dict = GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest.from_dict(google_analytics_admin_v1alpha_delete_access_binding_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


