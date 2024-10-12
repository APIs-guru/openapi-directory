# VideoProcessingDetailsProcessingProgress

Video processing progress and completion time estimate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parts_processed** | **str** | The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video. | [optional] 
**parts_total** | **str** | An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video. | [optional] 
**time_left_ms** | **str** | An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video. | [optional] 

## Example

```python
from openapi_client.models.video_processing_details_processing_progress import VideoProcessingDetailsProcessingProgress

# TODO update the JSON string below
json = "{}"
# create an instance of VideoProcessingDetailsProcessingProgress from a JSON string
video_processing_details_processing_progress_instance = VideoProcessingDetailsProcessingProgress.from_json(json)
# print the JSON string representation of the object
print(VideoProcessingDetailsProcessingProgress.to_json())

# convert the object into a dict
video_processing_details_processing_progress_dict = video_processing_details_processing_progress_instance.to_dict()
# create an instance of VideoProcessingDetailsProcessingProgress from a dict
video_processing_details_processing_progress_from_dict = VideoProcessingDetailsProcessingProgress.from_dict(video_processing_details_processing_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


