# GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse

Response message for ListDisplayVideo360AdvertiserLinks RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_video360_advertiser_links** | [**List[GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink]**](GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.md) | List of DisplayVideo360AdvertiserLinks. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response import GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse from a JSON string
google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response_instance = GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response_dict = google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse from a dict
google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response_from_dict = GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse.from_dict(google_analytics_admin_v1alpha_list_display_video360_advertiser_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


