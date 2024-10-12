# GoogleAnalyticsAdminV1alphaGlobalSiteTag

Read-only resource with the tag for sending data from a website to a DataStream. Only present for web DataStream resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name for this GlobalSiteTag resource. Format: properties/{property_id}/dataStreams/{stream_id}/globalSiteTag Example: \&quot;properties/123/dataStreams/456/globalSiteTag\&quot; | [optional] [readonly] 
**snippet** | **str** | Immutable. JavaScript code snippet to be pasted as the first item into the head tag of every webpage to measure. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_global_site_tag import GoogleAnalyticsAdminV1alphaGlobalSiteTag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaGlobalSiteTag from a JSON string
google_analytics_admin_v1alpha_global_site_tag_instance = GoogleAnalyticsAdminV1alphaGlobalSiteTag.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaGlobalSiteTag.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_global_site_tag_dict = google_analytics_admin_v1alpha_global_site_tag_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaGlobalSiteTag from a dict
google_analytics_admin_v1alpha_global_site_tag_from_dict = GoogleAnalyticsAdminV1alphaGlobalSiteTag.from_dict(google_analytics_admin_v1alpha_global_site_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


