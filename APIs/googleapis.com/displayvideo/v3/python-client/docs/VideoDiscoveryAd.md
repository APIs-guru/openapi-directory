# VideoDiscoveryAd

Details for a video discovery ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description1** | **str** | First text line for the ad. | [optional] 
**description2** | **str** | Second text line for the ad. | [optional] 
**headline** | **str** | The headline of ad. | [optional] 
**thumbnail** | **str** | Thumbnail image used in the ad. | [optional] 
**video** | [**YoutubeVideoDetails**](YoutubeVideoDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_discovery_ad import VideoDiscoveryAd

# TODO update the JSON string below
json = "{}"
# create an instance of VideoDiscoveryAd from a JSON string
video_discovery_ad_instance = VideoDiscoveryAd.from_json(json)
# print the JSON string representation of the object
print(VideoDiscoveryAd.to_json())

# convert the object into a dict
video_discovery_ad_dict = video_discovery_ad_instance.to_dict()
# create an instance of VideoDiscoveryAd from a dict
video_discovery_ad_from_dict = VideoDiscoveryAd.from_dict(video_discovery_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


