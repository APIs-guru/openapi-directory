# VideoPerformanceAd

Details for a video performance ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_button_labels** | **List[str]** | The list of text assets shown on the call-to-action button. | [optional] 
**companion_banners** | [**List[ImageAsset]**](ImageAsset.md) | The list of companion banners used by this ad. | [optional] 
**custom_parameters** | **Dict[str, str]** | The custom parameters to pass custom values to tracking URL template. | [optional] 
**descriptions** | **List[str]** | The list of descriptions shown on the call-to-action banner. | [optional] 
**display_url_breadcrumb1** | **str** | The first piece after the domain in the display URL. | [optional] 
**display_url_breadcrumb2** | **str** | The second piece after the domain in the display URL. | [optional] 
**domain** | **str** | The domain of the display URL. | [optional] 
**final_url** | **str** | The URL address of the webpage that people reach after they click the ad. | [optional] 
**headlines** | **List[str]** | The list of headlines shown on the call-to-action banner. | [optional] 
**long_headlines** | **List[str]** | The list of lone headlines shown on the call-to-action banner. | [optional] 
**tracking_url** | **str** | The URL address loaded in the background for tracking purposes. | [optional] 
**videos** | [**List[YoutubeVideoDetails]**](YoutubeVideoDetails.md) | The list of YouTube video assets used by this ad. | [optional] 

## Example

```python
from openapi_client.models.video_performance_ad import VideoPerformanceAd

# TODO update the JSON string below
json = "{}"
# create an instance of VideoPerformanceAd from a JSON string
video_performance_ad_instance = VideoPerformanceAd.from_json(json)
# print the JSON string representation of the object
print(VideoPerformanceAd.to_json())

# convert the object into a dict
video_performance_ad_dict = video_performance_ad_instance.to_dict()
# create an instance of VideoPerformanceAd from a dict
video_performance_ad_from_dict = VideoPerformanceAd.from_dict(video_performance_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


