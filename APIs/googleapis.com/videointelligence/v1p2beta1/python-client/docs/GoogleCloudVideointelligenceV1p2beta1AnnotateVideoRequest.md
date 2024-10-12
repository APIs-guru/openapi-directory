# GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest

Video annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | **List[str]** | Required. Requested video annotation features. | [optional] 
**input_content** | **bytearray** | The video data bytes. If unset, the input video(s) should be specified via the &#x60;input_uri&#x60;. If set, &#x60;input_uri&#x60; must be unset. | [optional] 
**input_uri** | **str** | Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: &#x60;gs://bucket-id/object-id&#x60; (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the &#x60;object-id&#x60;. Supported wildcards: &#39;*&#39; to match 0 or more characters; &#39;?&#39; to match 1 character. If unset, the input video should be embedded in the request as &#x60;input_content&#x60;. If set, &#x60;input_content&#x60; must be unset. | [optional] 
**location_id** | **str** | Optional. Cloud region where annotation should take place. Supported cloud regions are: &#x60;us-east1&#x60;, &#x60;us-west1&#x60;, &#x60;europe-west1&#x60;, &#x60;asia-east1&#x60;. If no region is specified, the region will be determined based on video file location. | [optional] 
**output_uri** | **str** | Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: &#x60;gs://bucket-id/object-id&#x60; (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). | [optional] 
**video_context** | [**GoogleCloudVideointelligenceV1p2beta1VideoContext**](GoogleCloudVideointelligenceV1p2beta1VideoContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_annotate_video_request import GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest from a JSON string
google_cloud_videointelligence_v1p2beta1_annotate_video_request_instance = GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_annotate_video_request_dict = google_cloud_videointelligence_v1p2beta1_annotate_video_request_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest from a dict
google_cloud_videointelligence_v1p2beta1_annotate_video_request_from_dict = GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest.from_dict(google_cloud_videointelligence_v1p2beta1_annotate_video_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


