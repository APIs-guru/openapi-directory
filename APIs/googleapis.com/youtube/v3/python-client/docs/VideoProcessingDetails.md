# VideoProcessingDetails

Describes processing status and progress and availability of some other Video resource parts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_suggestions_availability** | **str** | This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. | [optional] 
**file_details_availability** | **str** | This value indicates whether file details are available for the uploaded video. You can retrieve a video&#39;s file details by requesting the fileDetails part in your videos.list() request. | [optional] 
**processing_failure_reason** | **str** | The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property&#39;s value is failed. | [optional] 
**processing_issues_availability** | **str** | This value indicates whether the video processing engine has generated suggestions that might improve YouTube&#39;s ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. | [optional] 
**processing_progress** | [**VideoProcessingDetailsProcessingProgress**](VideoProcessingDetailsProcessingProgress.md) |  | [optional] 
**processing_status** | **str** | The video&#39;s processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed. | [optional] 
**tag_suggestions_availability** | **str** | This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video&#39;s metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request. | [optional] 
**thumbnails_availability** | **str** | This value indicates whether thumbnail images have been generated for the video. | [optional] 

## Example

```python
from openapi_client.models.video_processing_details import VideoProcessingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoProcessingDetails from a JSON string
video_processing_details_instance = VideoProcessingDetails.from_json(json)
# print the JSON string representation of the object
print(VideoProcessingDetails.to_json())

# convert the object into a dict
video_processing_details_dict = video_processing_details_instance.to_dict()
# create an instance of VideoProcessingDetails from a dict
video_processing_details_from_dict = VideoProcessingDetails.from_dict(video_processing_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


