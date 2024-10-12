# CreativeNativeAd

If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser** | **str** |  | [optional] 
**app_icon** | [**CreativeNativeAdAppIcon**](CreativeNativeAdAppIcon.md) |  | [optional] 
**body** | **str** | A long description of the ad. | [optional] 
**call_to_action** | **str** | A label for the button that the user is supposed to click. | [optional] 
**click_link_url** | **str** | The URL that the browser/SDK will load when the user clicks the ad. | [optional] 
**click_tracking_url** | **str** | The URL to use for click tracking. | [optional] 
**headline** | **str** | A short title for the ad. | [optional] 
**image** | [**CreativeNativeAdImage**](CreativeNativeAdImage.md) |  | [optional] 
**impression_tracking_url** | **List[str]** | The URLs are called when the impression is rendered. | [optional] 
**logo** | [**CreativeNativeAdLogo**](CreativeNativeAdLogo.md) |  | [optional] 
**price** | **str** | The price of the promoted app including the currency info. | [optional] 
**star_rating** | **float** | The app rating in the app store. Must be in the range [0-5]. | [optional] 
**video_url** | **str** | The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url. | [optional] 

## Example

```python
from openapi_client.models.creative_native_ad import CreativeNativeAd

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeNativeAd from a JSON string
creative_native_ad_instance = CreativeNativeAd.from_json(json)
# print the JSON string representation of the object
print(CreativeNativeAd.to_json())

# convert the object into a dict
creative_native_ad_dict = creative_native_ad_instance.to_dict()
# create an instance of CreativeNativeAd from a dict
creative_native_ad_from_dict = CreativeNativeAd.from_dict(creative_native_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


