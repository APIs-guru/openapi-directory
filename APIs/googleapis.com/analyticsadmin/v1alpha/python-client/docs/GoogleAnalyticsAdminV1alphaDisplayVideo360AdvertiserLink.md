# GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink

A link between a GA4 property and a Display & Video 360 advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_personalization_enabled** | **bool** | Enables personalized advertising features with this integration. If this field is not set on create/update, it will be defaulted to true. | [optional] 
**advertiser_display_name** | **str** | Output only. The display name of the Display &amp; Video 360 Advertiser. | [optional] [readonly] 
**advertiser_id** | **str** | Immutable. The Display &amp; Video 360 Advertiser&#39;s advertiser ID. | [optional] 
**campaign_data_sharing_enabled** | **bool** | Immutable. Enables the import of campaign data from Display &amp; Video 360 into the GA4 property. After link creation, this can only be updated from the Display &amp; Video 360 product. If this field is not set on create, it will be defaulted to true. | [optional] 
**cost_data_sharing_enabled** | **bool** | Immutable. Enables the import of cost data from Display &amp; Video 360 into the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Display &amp; Video 360 product. If this field is not set on create, it will be defaulted to true. | [optional] 
**name** | **str** | Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinks/{linkId} Note: linkId is not the Display &amp; Video 360 Advertiser ID | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_display_video360_advertiser_link import GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink from a JSON string
google_analytics_admin_v1alpha_display_video360_advertiser_link_instance = GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_display_video360_advertiser_link_dict = google_analytics_admin_v1alpha_display_video360_advertiser_link_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink from a dict
google_analytics_admin_v1alpha_display_video360_advertiser_link_from_dict = GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink.from_dict(google_analytics_admin_v1alpha_display_video360_advertiser_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


