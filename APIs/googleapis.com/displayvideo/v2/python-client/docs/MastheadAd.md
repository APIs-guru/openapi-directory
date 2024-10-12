# MastheadAd

Details for a Masthead Ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoplay_video_duration** | **str** | The duration of time the video will autoplay. | [optional] 
**autoplay_video_start_millisecond** | **str** | The amount of time in milliseconds after which the video will start to play. | [optional] 
**call_to_action_button_label** | **str** | The text on the call-to-action button. | [optional] 
**call_to_action_final_url** | **str** | The destination URL for the call-to-action button. | [optional] 
**call_to_action_tracking_url** | **str** | The tracking URL for the call-to-action button. | [optional] 
**companion_youtube_videos** | [**List[YoutubeVideoDetails]**](YoutubeVideoDetails.md) | The videos that appear next to the Masthead Ad on desktop. Can be no more than two. | [optional] 
**description** | **str** | The description of the ad. | [optional] 
**headline** | **str** | The headline of the ad. | [optional] 
**show_channel_art** | **bool** | Whether to show a background or banner that appears at the top of a YouTube page. | [optional] 
**video** | [**YoutubeVideoDetails**](YoutubeVideoDetails.md) |  | [optional] 
**video_aspect_ratio** | **str** | The aspect ratio of the autoplaying YouTube video on the Masthead. | [optional] 

## Example

```python
from openapi_client.models.masthead_ad import MastheadAd

# TODO update the JSON string below
json = "{}"
# create an instance of MastheadAd from a JSON string
masthead_ad_instance = MastheadAd.from_json(json)
# print the JSON string representation of the object
print(MastheadAd.to_json())

# convert the object into a dict
masthead_ad_dict = masthead_ad_instance.to_dict()
# create an instance of MastheadAd from a dict
masthead_ad_from_dict = MastheadAd.from_dict(masthead_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


