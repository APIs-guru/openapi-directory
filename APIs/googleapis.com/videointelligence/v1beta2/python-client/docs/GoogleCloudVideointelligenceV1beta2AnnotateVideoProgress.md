# GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_progress** | [**List[GoogleCloudVideointelligenceV1beta2VideoAnnotationProgress]**](GoogleCloudVideointelligenceV1beta2VideoAnnotationProgress.md) | Progress metadata for all videos specified in &#x60;AnnotateVideoRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_annotate_video_progress import GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress from a JSON string
google_cloud_videointelligence_v1beta2_annotate_video_progress_instance = GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_annotate_video_progress_dict = google_cloud_videointelligence_v1beta2_annotate_video_progress_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress from a dict
google_cloud_videointelligence_v1beta2_annotate_video_progress_from_dict = GoogleCloudVideointelligenceV1beta2AnnotateVideoProgress.from_dict(google_cloud_videointelligence_v1beta2_annotate_video_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


