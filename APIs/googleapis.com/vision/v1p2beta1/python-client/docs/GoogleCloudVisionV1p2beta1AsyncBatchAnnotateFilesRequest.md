# GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest

Multiple async file annotation requests are batched into a single service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. | [optional] 
**parent** | **str** | Optional. Target project and location to make a call. Format: &#x60;projects/{project-id}/locations/{location-id}&#x60;. If no parent is specified, a region will be chosen automatically. Supported location-ids: &#x60;us&#x60;: USA country only, &#x60;asia&#x60;: East asia areas, like Japan, Taiwan, &#x60;eu&#x60;: The European Union. Example: &#x60;projects/project-A/locations/eu&#x60;. | [optional] 
**requests** | [**List[GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest]**](GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest.md) | Required. Individual async file annotation requests for this batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_async_batch_annotate_files_request import GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest from a JSON string
google_cloud_vision_v1p2beta1_async_batch_annotate_files_request_instance = GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_async_batch_annotate_files_request_dict = google_cloud_vision_v1p2beta1_async_batch_annotate_files_request_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest from a dict
google_cloud_vision_v1p2beta1_async_batch_annotate_files_request_from_dict = GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest.from_dict(google_cloud_vision_v1p2beta1_async_batch_annotate_files_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


