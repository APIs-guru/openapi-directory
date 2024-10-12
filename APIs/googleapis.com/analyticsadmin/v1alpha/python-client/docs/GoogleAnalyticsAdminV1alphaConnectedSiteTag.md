# GoogleAnalyticsAdminV1alphaConnectedSiteTag

Configuration for a specific Connected Site Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. User-provided display name for the connected site tag. Must be less than 256 characters. | [optional] 
**tag_id** | **str** | Required. \&quot;Tag ID to forward events to. Also known as the Measurement ID, or the \&quot;G-ID\&quot; (For example: G-12345). | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_connected_site_tag import GoogleAnalyticsAdminV1alphaConnectedSiteTag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaConnectedSiteTag from a JSON string
google_analytics_admin_v1alpha_connected_site_tag_instance = GoogleAnalyticsAdminV1alphaConnectedSiteTag.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaConnectedSiteTag.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_connected_site_tag_dict = google_analytics_admin_v1alpha_connected_site_tag_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaConnectedSiteTag from a dict
google_analytics_admin_v1alpha_connected_site_tag_from_dict = GoogleAnalyticsAdminV1alphaConnectedSiteTag.from_dict(google_analytics_admin_v1alpha_connected_site_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


