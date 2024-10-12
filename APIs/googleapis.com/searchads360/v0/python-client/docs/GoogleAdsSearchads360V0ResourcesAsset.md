# GoogleAdsSearchads360V0ResourcesAsset

Asset is a part of an ad which can be shared across multiple ads. It can be an image (ImageAsset), a video (YoutubeVideoAsset), etc. Assets are immutable and cannot be removed. To stop an asset from serving, remove the asset from the entity that is using it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_asset** | [**GoogleAdsSearchads360V0CommonUnifiedCallAsset**](GoogleAdsSearchads360V0CommonUnifiedCallAsset.md) |  | [optional] 
**call_to_action_asset** | [**GoogleAdsSearchads360V0CommonCallToActionAsset**](GoogleAdsSearchads360V0CommonCallToActionAsset.md) |  | [optional] 
**callout_asset** | [**GoogleAdsSearchads360V0CommonUnifiedCalloutAsset**](GoogleAdsSearchads360V0CommonUnifiedCalloutAsset.md) |  | [optional] 
**creation_time** | **str** | Output only. The timestamp when this asset was created. The timestamp is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss\&quot; format. | [optional] [readonly] 
**engine_status** | **str** | Output only. The Engine Status for an asset. | [optional] [readonly] 
**final_urls** | **List[str]** | A list of possible final URLs after all cross domain redirects. | [optional] 
**id** | **str** | Output only. The ID of the asset. | [optional] [readonly] 
**image_asset** | [**GoogleAdsSearchads360V0CommonImageAsset**](GoogleAdsSearchads360V0CommonImageAsset.md) |  | [optional] 
**last_modified_time** | **str** | Output only. The datetime when this asset was last modified. The datetime is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss.ssssss\&quot; format. | [optional] [readonly] 
**location_asset** | [**GoogleAdsSearchads360V0CommonUnifiedLocationAsset**](GoogleAdsSearchads360V0CommonUnifiedLocationAsset.md) |  | [optional] 
**mobile_app_asset** | [**GoogleAdsSearchads360V0CommonMobileAppAsset**](GoogleAdsSearchads360V0CommonMobileAppAsset.md) |  | [optional] 
**name** | **str** | Optional name of the asset. | [optional] 
**page_feed_asset** | [**GoogleAdsSearchads360V0CommonUnifiedPageFeedAsset**](GoogleAdsSearchads360V0CommonUnifiedPageFeedAsset.md) |  | [optional] 
**resource_name** | **str** | Immutable. The resource name of the asset. Asset resource names have the form: &#x60;customers/{customer_id}/assets/{asset_id}&#x60; | [optional] 
**sitelink_asset** | [**GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset**](GoogleAdsSearchads360V0CommonUnifiedSitelinkAsset.md) |  | [optional] 
**status** | **str** | Output only. The status of the asset. | [optional] [readonly] 
**text_asset** | [**GoogleAdsSearchads360V0CommonTextAsset**](GoogleAdsSearchads360V0CommonTextAsset.md) |  | [optional] 
**tracking_url_template** | **str** | URL template for constructing a tracking URL. | [optional] 
**type** | **str** | Output only. Type of the asset. | [optional] [readonly] 
**youtube_video_asset** | [**GoogleAdsSearchads360V0CommonYoutubeVideoAsset**](GoogleAdsSearchads360V0CommonYoutubeVideoAsset.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset import GoogleAdsSearchads360V0ResourcesAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAsset from a JSON string
google_ads_searchads360_v0_resources_asset_instance = GoogleAdsSearchads360V0ResourcesAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_dict = google_ads_searchads360_v0_resources_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAsset from a dict
google_ads_searchads360_v0_resources_asset_from_dict = GoogleAdsSearchads360V0ResourcesAsset.from_dict(google_ads_searchads360_v0_resources_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


