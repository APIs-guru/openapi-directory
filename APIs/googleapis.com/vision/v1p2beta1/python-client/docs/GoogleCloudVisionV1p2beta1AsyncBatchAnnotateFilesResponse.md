# GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse

Response to an async batch file annotation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse]**](GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse.md) | The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_async_batch_annotate_files_response import GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse from a JSON string
google_cloud_vision_v1p2beta1_async_batch_annotate_files_response_instance = GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_async_batch_annotate_files_response_dict = google_cloud_vision_v1p2beta1_async_batch_annotate_files_response_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse from a dict
google_cloud_vision_v1p2beta1_async_batch_annotate_files_response_from_dict = GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse.from_dict(google_cloud_vision_v1p2beta1_async_batch_annotate_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


