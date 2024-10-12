# GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse

Response message for BatchGetAccessBindings RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_bindings** | [**List[GoogleAnalyticsAdminV1alphaAccessBinding]**](GoogleAnalyticsAdminV1alphaAccessBinding.md) | The requested access bindings. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_batch_get_access_bindings_response import GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse from a JSON string
google_analytics_admin_v1alpha_batch_get_access_bindings_response_instance = GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_batch_get_access_bindings_response_dict = google_analytics_admin_v1alpha_batch_get_access_bindings_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse from a dict
google_analytics_admin_v1alpha_batch_get_access_bindings_response_from_dict = GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse.from_dict(google_analytics_admin_v1alpha_batch_get_access_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


