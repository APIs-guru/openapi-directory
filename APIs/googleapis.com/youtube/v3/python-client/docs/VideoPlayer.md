# VideoPlayer

Player to be used for a video playback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embed_height** | **str** |  | [optional] 
**embed_html** | **str** | An &lt;iframe&gt; tag that embeds a player that will play the video. | [optional] 
**embed_width** | **str** | The embed width | [optional] 

## Example

```python
from openapi_client.models.video_player import VideoPlayer

# TODO update the JSON string below
json = "{}"
# create an instance of VideoPlayer from a JSON string
video_player_instance = VideoPlayer.from_json(json)
# print the JSON string representation of the object
print(VideoPlayer.to_json())

# convert the object into a dict
video_player_dict = video_player_instance.to_dict()
# create an instance of VideoPlayer from a dict
video_player_from_dict = VideoPlayer.from_dict(video_player_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


