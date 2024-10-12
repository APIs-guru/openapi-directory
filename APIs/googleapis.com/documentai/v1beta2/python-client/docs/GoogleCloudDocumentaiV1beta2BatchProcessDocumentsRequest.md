# GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest

Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudDocumentaiV1beta2ProcessDocumentRequest]**](GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.md) | Required. Individual requests for each document. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_batch_process_documents_request import GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest from a JSON string
google_cloud_documentai_v1beta2_batch_process_documents_request_instance = GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_batch_process_documents_request_dict = google_cloud_documentai_v1beta2_batch_process_documents_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest from a dict
google_cloud_documentai_v1beta2_batch_process_documents_request_from_dict = GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest.from_dict(google_cloud_documentai_v1beta2_batch_process_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


