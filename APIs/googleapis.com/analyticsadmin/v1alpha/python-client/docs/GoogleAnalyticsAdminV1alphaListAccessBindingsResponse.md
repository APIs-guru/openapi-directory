# GoogleAnalyticsAdminV1alphaListAccessBindingsResponse

Response message for ListAccessBindings RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_bindings** | [**List[GoogleAnalyticsAdminV1alphaAccessBinding]**](GoogleAnalyticsAdminV1alphaAccessBinding.md) | List of AccessBindings. These will be ordered stably, but in an arbitrary order. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_access_bindings_response import GoogleAnalyticsAdminV1alphaListAccessBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListAccessBindingsResponse from a JSON string
google_analytics_admin_v1alpha_list_access_bindings_response_instance = GoogleAnalyticsAdminV1alphaListAccessBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListAccessBindingsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_access_bindings_response_dict = google_analytics_admin_v1alpha_list_access_bindings_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListAccessBindingsResponse from a dict
google_analytics_admin_v1alpha_list_access_bindings_response_from_dict = GoogleAnalyticsAdminV1alphaListAccessBindingsResponse.from_dict(google_analytics_admin_v1alpha_list_access_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


