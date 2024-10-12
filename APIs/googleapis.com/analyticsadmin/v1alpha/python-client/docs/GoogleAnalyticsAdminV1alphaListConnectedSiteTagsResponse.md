# GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse

Response message for ListConnectedSiteTags RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected_site_tags** | [**List[GoogleAnalyticsAdminV1alphaConnectedSiteTag]**](GoogleAnalyticsAdminV1alphaConnectedSiteTag.md) | The site tags for the Universal Analytics property. A maximum of 20 connected site tags will be returned. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_connected_site_tags_response import GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse from a JSON string
google_analytics_admin_v1alpha_list_connected_site_tags_response_instance = GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_connected_site_tags_response_dict = google_analytics_admin_v1alpha_list_connected_site_tags_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse from a dict
google_analytics_admin_v1alpha_list_connected_site_tags_response_from_dict = GoogleAnalyticsAdminV1alphaListConnectedSiteTagsResponse.from_dict(google_analytics_admin_v1alpha_list_connected_site_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


