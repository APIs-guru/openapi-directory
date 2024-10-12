# GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo

A Search Ads 360 expanded text ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_tracking_id** | **str** | The tracking id of the ad. | [optional] 
**description1** | **str** | The first line of the ad&#39;s description. | [optional] 
**description2** | **str** | The second line of the ad&#39;s description. | [optional] 
**headline** | **str** | The headline of the ad. | [optional] 
**headline2** | **str** | The second headline of the ad. | [optional] 
**headline3** | **str** | The third headline of the ad. | [optional] 
**path1** | **str** | Text appended to the auto-generated visible URL with a delimiter. | [optional] 
**path2** | **str** | Text appended to path1 with a delimiter. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_search_ads360_expanded_text_ad_info import GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo from a JSON string
google_ads_searchads360_v0_common_search_ads360_expanded_text_ad_info_instance = GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_search_ads360_expanded_text_ad_info_dict = google_ads_searchads360_v0_common_search_ads360_expanded_text_ad_info_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo from a dict
google_ads_searchads360_v0_common_search_ads360_expanded_text_ad_info_from_dict = GoogleAdsSearchads360V0CommonSearchAds360ExpandedTextAdInfo.from_dict(google_ads_searchads360_v0_common_search_ads360_expanded_text_ad_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


