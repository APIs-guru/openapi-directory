# GoogleAnalyticsAdminV1alphaSearchAds360Link

A link between a GA4 property and a Search Ads 360 entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_personalization_enabled** | **bool** | Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true. | [optional] 
**advertiser_display_name** | **str** | Output only. The display name of the Search Ads 360 Advertiser. Allows users to easily identify the linked resource. | [optional] [readonly] 
**advertiser_id** | **str** | Immutable. This field represents the Advertiser ID of the Search Ads 360 Advertiser. that has been linked. | [optional] 
**campaign_data_sharing_enabled** | **bool** | Immutable. Enables the import of campaign data from Search Ads 360 into the GA4 property. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true. | [optional] 
**cost_data_sharing_enabled** | **bool** | Immutable. Enables the import of cost data from Search Ads 360 to the GA4 property. This can only be enabled if campaign_data_sharing_enabled is enabled. After link creation, this can only be updated from the Search Ads 360 product. If this field is not set on create, it will be defaulted to true. | [optional] 
**name** | **str** | Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId}/searchAds360Links/{linkId} Note: linkId is not the Search Ads 360 advertiser ID | [optional] [readonly] 
**site_stats_sharing_enabled** | **bool** | Enables export of site stats with this integration. If this field is not set on create, it will be defaulted to true. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_search_ads360_link import GoogleAnalyticsAdminV1alphaSearchAds360Link

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSearchAds360Link from a JSON string
google_analytics_admin_v1alpha_search_ads360_link_instance = GoogleAnalyticsAdminV1alphaSearchAds360Link.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSearchAds360Link.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_search_ads360_link_dict = google_analytics_admin_v1alpha_search_ads360_link_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSearchAds360Link from a dict
google_analytics_admin_v1alpha_search_ads360_link_from_dict = GoogleAnalyticsAdminV1alphaSearchAds360Link.from_dict(google_analytics_admin_v1alpha_search_ads360_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


