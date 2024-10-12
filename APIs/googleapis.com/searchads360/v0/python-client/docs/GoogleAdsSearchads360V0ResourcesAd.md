# GoogleAdsSearchads360V0ResourcesAd

An ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_url** | **str** | The URL that appears in the ad description for some ad formats. | [optional] 
**expanded_dynamic_search_ad** | [**GoogleAdsSearchads360V0CommonSearchAds360ExpandedDynamicSearchAdInfo**](GoogleAdsSearchads360V0CommonSearchAds360ExpandedDynamicSearchAdInfo.md) |  | [optional] 
**expanded_text_ad** | [**GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo**](GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo.md) |  | [optional] 
**final_urls** | **List[str]** | The list of possible final URLs after all cross-domain redirects for the ad. | [optional] 
**id** | **str** | Output only. The ID of the ad. | [optional] [readonly] 
**name** | **str** | Immutable. The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad. The name field is currently only supported for DisplayUploadAd, ImageAd, ShoppingComparisonListingAd and VideoAd. | [optional] 
**product_ad** | **object** | A Search Ads 360 product ad. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the ad. Ad resource names have the form: &#x60;customers/{customer_id}/ads/{ad_id}&#x60; | [optional] 
**responsive_search_ad** | [**GoogleAdsSearchads360V0CommonSearchAds360ResponsiveSearchAdInfo**](GoogleAdsSearchads360V0CommonSearchAds360ResponsiveSearchAdInfo.md) |  | [optional] 
**text_ad** | [**GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo**](GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo.md) |  | [optional] 
**type** | **str** | Output only. The type of ad. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad import GoogleAdsSearchads360V0ResourcesAd

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAd from a JSON string
google_ads_searchads360_v0_resources_ad_instance = GoogleAdsSearchads360V0ResourcesAd.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAd.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_dict = google_ads_searchads360_v0_resources_ad_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAd from a dict
google_ads_searchads360_v0_resources_ad_from_dict = GoogleAdsSearchads360V0ResourcesAd.from_dict(google_ads_searchads360_v0_resources_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


