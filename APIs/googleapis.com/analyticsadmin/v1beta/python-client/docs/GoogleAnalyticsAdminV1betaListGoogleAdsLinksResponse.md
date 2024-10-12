# GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse

Response message for ListGoogleAdsLinks RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_ads_links** | [**List[GoogleAnalyticsAdminV1betaGoogleAdsLink]**](GoogleAnalyticsAdminV1betaGoogleAdsLink.md) | List of GoogleAdsLinks. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_list_google_ads_links_response import GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse from a JSON string
google_analytics_admin_v1beta_list_google_ads_links_response_instance = GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_list_google_ads_links_response_dict = google_analytics_admin_v1beta_list_google_ads_links_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse from a dict
google_analytics_admin_v1beta_list_google_ads_links_response_from_dict = GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse.from_dict(google_analytics_admin_v1beta_list_google_ads_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


