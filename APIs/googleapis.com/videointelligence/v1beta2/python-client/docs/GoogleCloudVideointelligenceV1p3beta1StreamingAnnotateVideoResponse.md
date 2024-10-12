# GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse

`StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_results** | [**GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults**](GoogleCloudVideointelligenceV1p3beta1StreamingVideoAnnotationResults.md) |  | [optional] 
**annotation_results_uri** | **str** | Google Cloud Storage URI that stores annotation results of one streaming session in JSON format. It is the annotation_result_storage_directory from the request followed by &#39;/cloud_project_number-session_id&#39;. | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_streaming_annotate_video_response import GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse from a JSON string
google_cloud_videointelligence_v1p3beta1_streaming_annotate_video_response_instance = GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_streaming_annotate_video_response_dict = google_cloud_videointelligence_v1p3beta1_streaming_annotate_video_response_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse from a dict
google_cloud_videointelligence_v1p3beta1_streaming_annotate_video_response_from_dict = GoogleCloudVideointelligenceV1p3beta1StreamingAnnotateVideoResponse.from_dict(google_cloud_videointelligence_v1p3beta1_streaming_annotate_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


