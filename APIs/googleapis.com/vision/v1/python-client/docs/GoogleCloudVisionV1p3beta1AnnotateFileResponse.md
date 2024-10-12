# GoogleCloudVisionV1p3beta1AnnotateFileResponse

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**input_config** | [**GoogleCloudVisionV1p3beta1InputConfig**](GoogleCloudVisionV1p3beta1InputConfig.md) |  | [optional] 
**responses** | [**List[GoogleCloudVisionV1p3beta1AnnotateImageResponse]**](GoogleCloudVisionV1p3beta1AnnotateImageResponse.md) | Individual responses to images found within the file. This field will be empty if the &#x60;error&#x60; field is set. | [optional] 
**total_pages** | **int** | This field gives the total number of pages in the file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_annotate_file_response import GoogleCloudVisionV1p3beta1AnnotateFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1AnnotateFileResponse from a JSON string
google_cloud_vision_v1p3beta1_annotate_file_response_instance = GoogleCloudVisionV1p3beta1AnnotateFileResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1AnnotateFileResponse.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_annotate_file_response_dict = google_cloud_vision_v1p3beta1_annotate_file_response_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1AnnotateFileResponse from a dict
google_cloud_vision_v1p3beta1_annotate_file_response_from_dict = GoogleCloudVisionV1p3beta1AnnotateFileResponse.from_dict(google_cloud_vision_v1p3beta1_annotate_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


