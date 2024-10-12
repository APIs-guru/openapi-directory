# GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_results** | [**List[GoogleCloudVideointelligenceV1beta2VideoAnnotationResults]**](GoogleCloudVideointelligenceV1beta2VideoAnnotationResults.md) | Annotation results for all videos specified in &#x60;AnnotateVideoRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_annotate_video_response import GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse from a JSON string
google_cloud_videointelligence_v1beta2_annotate_video_response_instance = GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_annotate_video_response_dict = google_cloud_videointelligence_v1beta2_annotate_video_response_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse from a dict
google_cloud_videointelligence_v1beta2_annotate_video_response_from_dict = GoogleCloudVideointelligenceV1beta2AnnotateVideoResponse.from_dict(google_cloud_videointelligence_v1beta2_annotate_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


