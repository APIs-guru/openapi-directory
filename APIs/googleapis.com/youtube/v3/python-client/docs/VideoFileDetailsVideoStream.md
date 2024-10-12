# VideoFileDetailsVideoStream

Information about a video stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_ratio** | **float** | The video content&#39;s display aspect ratio, which specifies the aspect ratio in which the video should be displayed. | [optional] 
**bitrate_bps** | **str** | The video stream&#39;s bitrate, in bits per second. | [optional] 
**codec** | **str** | The video codec that the stream uses. | [optional] 
**frame_rate_fps** | **float** | The video stream&#39;s frame rate, in frames per second. | [optional] 
**height_pixels** | **int** | The encoded video content&#39;s height in pixels. | [optional] 
**rotation** | **str** | The amount that YouTube needs to rotate the original source content to properly display the video. | [optional] 
**vendor** | **str** | A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code. | [optional] 
**width_pixels** | **int** | The encoded video content&#39;s width in pixels. You can calculate the video&#39;s encoding aspect ratio as width_pixels / height_pixels. | [optional] 

## Example

```python
from openapi_client.models.video_file_details_video_stream import VideoFileDetailsVideoStream

# TODO update the JSON string below
json = "{}"
# create an instance of VideoFileDetailsVideoStream from a JSON string
video_file_details_video_stream_instance = VideoFileDetailsVideoStream.from_json(json)
# print the JSON string representation of the object
print(VideoFileDetailsVideoStream.to_json())

# convert the object into a dict
video_file_details_video_stream_dict = video_file_details_video_stream_instance.to_dict()
# create an instance of VideoFileDetailsVideoStream from a dict
video_file_details_video_stream_from_dict = VideoFileDetailsVideoStream.from_dict(video_file_details_video_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


