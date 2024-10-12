# GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest

Request message for CreateConnectedSiteTag RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected_site_tag** | [**GoogleAnalyticsAdminV1alphaConnectedSiteTag**](GoogleAnalyticsAdminV1alphaConnectedSiteTag.md) |  | [optional] 
**var_property** | **str** | The Universal Analytics property to create connected site tags for. This API does not support GA4 properties. Format: properties/{universalAnalyticsPropertyId} Example: properties/1234 | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_create_connected_site_tag_request import GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest from a JSON string
google_analytics_admin_v1alpha_create_connected_site_tag_request_instance = GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_create_connected_site_tag_request_dict = google_analytics_admin_v1alpha_create_connected_site_tag_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest from a dict
google_analytics_admin_v1alpha_create_connected_site_tag_request_from_dict = GoogleAnalyticsAdminV1alphaCreateConnectedSiteTagRequest.from_dict(google_analytics_admin_v1alpha_create_connected_site_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


