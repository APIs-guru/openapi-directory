# GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse

Response message for BatchCreateAccessBindings RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_bindings** | [**List[GoogleAnalyticsAdminV1alphaAccessBinding]**](GoogleAnalyticsAdminV1alphaAccessBinding.md) | The access bindings created. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_batch_create_access_bindings_response import GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse from a JSON string
google_analytics_admin_v1alpha_batch_create_access_bindings_response_instance = GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_batch_create_access_bindings_response_dict = google_analytics_admin_v1alpha_batch_create_access_bindings_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse from a dict
google_analytics_admin_v1alpha_batch_create_access_bindings_response_from_dict = GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse.from_dict(google_analytics_admin_v1alpha_batch_create_access_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


