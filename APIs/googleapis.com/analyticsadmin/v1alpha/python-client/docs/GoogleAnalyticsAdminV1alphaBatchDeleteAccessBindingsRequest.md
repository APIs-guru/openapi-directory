# GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest

Request message for BatchDeleteAccessBindings RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest]**](GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest.md) | Required. The requests specifying the access bindings to delete. A maximum of 1000 access bindings can be deleted in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_batch_delete_access_bindings_request import GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest from a JSON string
google_analytics_admin_v1alpha_batch_delete_access_bindings_request_instance = GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_batch_delete_access_bindings_request_dict = google_analytics_admin_v1alpha_batch_delete_access_bindings_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest from a dict
google_analytics_admin_v1alpha_batch_delete_access_bindings_request_from_dict = GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest.from_dict(google_analytics_admin_v1alpha_batch_delete_access_bindings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


