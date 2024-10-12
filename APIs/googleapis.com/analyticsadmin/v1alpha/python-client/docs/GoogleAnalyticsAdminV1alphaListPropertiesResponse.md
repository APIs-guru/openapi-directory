# GoogleAnalyticsAdminV1alphaListPropertiesResponse

Response message for ListProperties RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**properties** | [**List[GoogleAnalyticsAdminV1alphaProperty]**](GoogleAnalyticsAdminV1alphaProperty.md) | Results that matched the filter criteria and were accessible to the caller. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_properties_response import GoogleAnalyticsAdminV1alphaListPropertiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListPropertiesResponse from a JSON string
google_analytics_admin_v1alpha_list_properties_response_instance = GoogleAnalyticsAdminV1alphaListPropertiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListPropertiesResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_properties_response_dict = google_analytics_admin_v1alpha_list_properties_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListPropertiesResponse from a dict
google_analytics_admin_v1alpha_list_properties_response_from_dict = GoogleAnalyticsAdminV1alphaListPropertiesResponse.from_dict(google_analytics_admin_v1alpha_list_properties_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


