# GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo

A Search Ads 360 text ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_tracking_id** | **str** | The tracking id of the ad. | [optional] 
**description1** | **str** | The first line of the ad&#39;s description. | [optional] 
**description2** | **str** | The second line of the ad&#39;s description. | [optional] 
**display_mobile_url** | **str** | The displayed mobile URL of the ad. | [optional] 
**display_url** | **str** | The displayed URL of the ad. | [optional] 
**headline** | **str** | The headline of the ad. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_search_ads360_text_ad_info import GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo from a JSON string
google_ads_searchads360_v0_common_search_ads360_text_ad_info_instance = GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_search_ads360_text_ad_info_dict = google_ads_searchads360_v0_common_search_ads360_text_ad_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo from a dict
google_ads_searchads360_v0_common_search_ads360_text_ad_info_from_dict = GoogleAdsSearchads360V0CommonSearchAds360TextAdInfo.from_dict(google_ads_searchads360_v0_common_search_ads360_text_ad_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


