# GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest

Request message for DeleteConnectedSiteTag RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | **str** | The Universal Analytics property to delete connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234 | [optional] 
**tag_id** | **str** | Tag ID to forward events to. Also known as the Measurement ID, or the \&quot;G-ID\&quot; (For example: G-12345). | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_delete_connected_site_tag_request import GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest from a JSON string
google_analytics_admin_v1alpha_delete_connected_site_tag_request_instance = GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_delete_connected_site_tag_request_dict = google_analytics_admin_v1alpha_delete_connected_site_tag_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest from a dict
google_analytics_admin_v1alpha_delete_connected_site_tag_request_from_dict = GoogleAnalyticsAdminV1alphaDeleteConnectedSiteTagRequest.from_dict(google_analytics_admin_v1alpha_delete_connected_site_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


