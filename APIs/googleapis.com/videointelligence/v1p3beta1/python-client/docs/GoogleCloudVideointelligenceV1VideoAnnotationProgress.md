# GoogleCloudVideointelligenceV1VideoAnnotationProgress

Annotation progress for a single video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature** | **str** | Specifies which feature is being tracked if the request contains more than one feature. | [optional] 
**input_uri** | **str** | Video file location in [Cloud Storage](https://cloud.google.com/storage/). | [optional] 
**progress_percent** | **int** | Approximate percentage processed thus far. Guaranteed to be 100 when fully processed. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1VideoSegment**](GoogleCloudVideointelligenceV1VideoSegment.md) |  | [optional] 
**start_time** | **str** | Time when the request was received. | [optional] 
**update_time** | **str** | Time of the most recent update. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1_video_annotation_progress import GoogleCloudVideointelligenceV1VideoAnnotationProgress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1VideoAnnotationProgress from a JSON string
google_cloud_videointelligence_v1_video_annotation_progress_instance = GoogleCloudVideointelligenceV1VideoAnnotationProgress.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1VideoAnnotationProgress.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1_video_annotation_progress_dict = google_cloud_videointelligence_v1_video_annotation_progress_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1VideoAnnotationProgress from a dict
google_cloud_videointelligence_v1_video_annotation_progress_from_dict = GoogleCloudVideointelligenceV1VideoAnnotationProgress.from_dict(google_cloud_videointelligence_v1_video_annotation_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


