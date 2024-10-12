# GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse

The response for a single offline file annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**GoogleCloudVisionV1p2beta1OutputConfig**](GoogleCloudVisionV1p2beta1OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_async_annotate_file_response import GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse from a JSON string
google_cloud_vision_v1p2beta1_async_annotate_file_response_instance = GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_async_annotate_file_response_dict = google_cloud_vision_v1p2beta1_async_annotate_file_response_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse from a dict
google_cloud_vision_v1p2beta1_async_annotate_file_response_from_dict = GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse.from_dict(google_cloud_vision_v1p2beta1_async_annotate_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


