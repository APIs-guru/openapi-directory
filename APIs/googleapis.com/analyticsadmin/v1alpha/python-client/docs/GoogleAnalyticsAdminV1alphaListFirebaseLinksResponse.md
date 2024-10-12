# GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse

Response message for ListFirebaseLinks RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firebase_links** | [**List[GoogleAnalyticsAdminV1alphaFirebaseLink]**](GoogleAnalyticsAdminV1alphaFirebaseLink.md) | List of FirebaseLinks. This will have at most one value. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_firebase_links_response import GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse from a JSON string
google_analytics_admin_v1alpha_list_firebase_links_response_instance = GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_firebase_links_response_dict = google_analytics_admin_v1alpha_list_firebase_links_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse from a dict
google_analytics_admin_v1alpha_list_firebase_links_response_from_dict = GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse.from_dict(google_analytics_admin_v1alpha_list_firebase_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


