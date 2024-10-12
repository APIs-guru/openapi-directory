# GoogleAnalyticsAdminV1alphaListAudiencesResponse

Response message for ListAudiences RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audiences** | [**List[GoogleAnalyticsAdminV1alphaAudience]**](GoogleAnalyticsAdminV1alphaAudience.md) | List of Audiences. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_audiences_response import GoogleAnalyticsAdminV1alphaListAudiencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListAudiencesResponse from a JSON string
google_analytics_admin_v1alpha_list_audiences_response_instance = GoogleAnalyticsAdminV1alphaListAudiencesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListAudiencesResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_audiences_response_dict = google_analytics_admin_v1alpha_list_audiences_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListAudiencesResponse from a dict
google_analytics_admin_v1alpha_list_audiences_response_from_dict = GoogleAnalyticsAdminV1alphaListAudiencesResponse.from_dict(google_analytics_admin_v1alpha_list_audiences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


