# AdGroupAd

A single ad associated with an ad group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_ad_id** | **str** | The unique ID of the ad. Assigned by the system. | [optional] 
**ad_group_id** | **str** | The unique ID of the ad group that the ad belongs to. | [optional] 
**ad_urls** | [**List[AdUrl]**](AdUrl.md) | List of URLs used by the ad. | [optional] 
**advertiser_id** | **str** | The unique ID of the advertiser the ad belongs to. | [optional] 
**audio_ad** | [**AudioAd**](AudioAd.md) |  | [optional] 
**bumper_ad** | [**BumperAd**](BumperAd.md) |  | [optional] 
**display_name** | **str** | The display name of the ad. Must be UTF-8 encoded with a maximum size of 255 bytes. | [optional] 
**display_video_source_ad** | [**DisplayVideoSourceAd**](DisplayVideoSourceAd.md) |  | [optional] 
**entity_status** | **str** | The entity status of the ad. | [optional] 
**in_stream_ad** | [**InStreamAd**](InStreamAd.md) |  | [optional] 
**masthead_ad** | [**MastheadAd**](MastheadAd.md) |  | [optional] 
**name** | **str** | The resource name of the ad. | [optional] 
**non_skippable_ad** | [**NonSkippableAd**](NonSkippableAd.md) |  | [optional] 
**video_discover_ad** | [**VideoDiscoveryAd**](VideoDiscoveryAd.md) |  | [optional] 
**video_performance_ad** | [**VideoPerformanceAd**](VideoPerformanceAd.md) |  | [optional] 

## Example

```python
from openapi_client.models.ad_group_ad import AdGroupAd

# TODO update the JSON string below
json = "{}"
# create an instance of AdGroupAd from a JSON string
ad_group_ad_instance = AdGroupAd.from_json(json)
# print the JSON string representation of the object
print(AdGroupAd.to_json())

# convert the object into a dict
ad_group_ad_dict = ad_group_ad_instance.to_dict()
# create an instance of AdGroupAd from a dict
ad_group_ad_from_dict = AdGroupAd.from_dict(ad_group_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


