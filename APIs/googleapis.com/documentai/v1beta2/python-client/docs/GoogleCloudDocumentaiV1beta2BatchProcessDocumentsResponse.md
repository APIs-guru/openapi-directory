# GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse

Response to an batch document processing request. This is returned in the LRO Operation after the operation is complete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[GoogleCloudDocumentaiV1beta2ProcessDocumentResponse]**](GoogleCloudDocumentaiV1beta2ProcessDocumentResponse.md) | Responses for each individual document. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_batch_process_documents_response import GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse from a JSON string
google_cloud_documentai_v1beta2_batch_process_documents_response_instance = GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_batch_process_documents_response_dict = google_cloud_documentai_v1beta2_batch_process_documents_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse from a dict
google_cloud_documentai_v1beta2_batch_process_documents_response_from_dict = GoogleCloudDocumentaiV1beta2BatchProcessDocumentsResponse.from_dict(google_cloud_documentai_v1beta2_batch_process_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


