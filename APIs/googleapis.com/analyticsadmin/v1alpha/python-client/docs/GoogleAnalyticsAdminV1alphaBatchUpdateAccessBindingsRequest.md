# GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest

Request message for BatchUpdateAccessBindings RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest]**](GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequest.md) | Required. The requests specifying the access bindings to update. A maximum of 1000 access bindings can be updated in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_batch_update_access_bindings_request import GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest from a JSON string
google_analytics_admin_v1alpha_batch_update_access_bindings_request_instance = GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_batch_update_access_bindings_request_dict = google_analytics_admin_v1alpha_batch_update_access_bindings_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest from a dict
google_analytics_admin_v1alpha_batch_update_access_bindings_request_from_dict = GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequest.from_dict(google_analytics_admin_v1alpha_batch_update_access_bindings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


