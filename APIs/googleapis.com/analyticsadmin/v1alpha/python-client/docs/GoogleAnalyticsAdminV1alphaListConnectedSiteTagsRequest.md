# GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest

Request message for ListConnectedSiteTags RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | **str** | The Universal Analytics property to fetch connected site tags for. This does not work on GA4 properties. A maximum of 20 connected site tags will be returned. Example Format: &#x60;properties/1234&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_connected_site_tags_request import GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest from a JSON string
google_analytics_admin_v1alpha_list_connected_site_tags_request_instance = GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_connected_site_tags_request_dict = google_analytics_admin_v1alpha_list_connected_site_tags_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest from a dict
google_analytics_admin_v1alpha_list_connected_site_tags_request_from_dict = GoogleAnalyticsAdminV1alphaListConnectedSiteTagsRequest.from_dict(google_analytics_admin_v1alpha_list_connected_site_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


