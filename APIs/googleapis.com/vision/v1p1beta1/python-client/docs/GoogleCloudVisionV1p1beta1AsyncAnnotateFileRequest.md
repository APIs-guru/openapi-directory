# GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest

An offline file annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[GoogleCloudVisionV1p1beta1Feature]**](GoogleCloudVisionV1p1beta1Feature.md) | Required. Requested features. | [optional] 
**image_context** | [**GoogleCloudVisionV1p1beta1ImageContext**](GoogleCloudVisionV1p1beta1ImageContext.md) |  | [optional] 
**input_config** | [**GoogleCloudVisionV1p1beta1InputConfig**](GoogleCloudVisionV1p1beta1InputConfig.md) |  | [optional] 
**output_config** | [**GoogleCloudVisionV1p1beta1OutputConfig**](GoogleCloudVisionV1p1beta1OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_async_annotate_file_request import GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest from a JSON string
google_cloud_vision_v1p1beta1_async_annotate_file_request_instance = GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_async_annotate_file_request_dict = google_cloud_vision_v1p1beta1_async_annotate_file_request_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest from a dict
google_cloud_vision_v1p1beta1_async_annotate_file_request_from_dict = GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest.from_dict(google_cloud_vision_v1p1beta1_async_annotate_file_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


