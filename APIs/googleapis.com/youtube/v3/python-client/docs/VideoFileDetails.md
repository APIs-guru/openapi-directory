# VideoFileDetails

Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_streams** | [**List[VideoFileDetailsAudioStream]**](VideoFileDetailsAudioStream.md) | A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream. | [optional] 
**bitrate_bps** | **str** | The uploaded video file&#39;s combined (video and audio) bitrate in bits per second. | [optional] 
**container** | **str** | The uploaded video file&#39;s container format. | [optional] 
**creation_time** | **str** | The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM  | [optional] 
**duration_ms** | **str** | The length of the uploaded video in milliseconds. | [optional] 
**file_name** | **str** | The uploaded file&#39;s name. This field is present whether a video file or another type of file was uploaded. | [optional] 
**file_size** | **str** | The uploaded file&#39;s size in bytes. This field is present whether a video file or another type of file was uploaded. | [optional] 
**file_type** | **str** | The uploaded file&#39;s type as detected by YouTube&#39;s video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded. | [optional] 
**video_streams** | [**List[VideoFileDetailsVideoStream]**](VideoFileDetailsVideoStream.md) | A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream. | [optional] 

## Example

```python
from openapi_client.models.video_file_details import VideoFileDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoFileDetails from a JSON string
video_file_details_instance = VideoFileDetails.from_json(json)
# print the JSON string representation of the object
print(VideoFileDetails.to_json())

# convert the object into a dict
video_file_details_dict = video_file_details_instance.to_dict()
# create an instance of VideoFileDetails from a dict
video_file_details_from_dict = VideoFileDetails.from_dict(video_file_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


