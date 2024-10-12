# GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_results** | [**List[GoogleCloudVideointelligenceV1p3beta1VideoAnnotationResults]**](GoogleCloudVideointelligenceV1p3beta1VideoAnnotationResults.md) | Annotation results for all videos specified in &#x60;AnnotateVideoRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_annotate_video_response import GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse from a JSON string
google_cloud_videointelligence_v1p3beta1_annotate_video_response_instance = GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_annotate_video_response_dict = google_cloud_videointelligence_v1p3beta1_annotate_video_response_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse from a dict
google_cloud_videointelligence_v1p3beta1_annotate_video_response_from_dict = GoogleCloudVideointelligenceV1p3beta1AnnotateVideoResponse.from_dict(google_cloud_videointelligence_v1p3beta1_annotate_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


