# GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse

Response message for BatchUpdateAccessBindings RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_bindings** | [**List[GoogleAnalyticsAdminV1alphaAccessBinding]**](GoogleAnalyticsAdminV1alphaAccessBinding.md) | The access bindings updated. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_batch_update_access_bindings_response import GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse from a JSON string
google_analytics_admin_v1alpha_batch_update_access_bindings_response_instance = GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_batch_update_access_bindings_response_dict = google_analytics_admin_v1alpha_batch_update_access_bindings_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse from a dict
google_analytics_admin_v1alpha_batch_update_access_bindings_response_from_dict = GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse.from_dict(google_analytics_admin_v1alpha_batch_update_access_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


