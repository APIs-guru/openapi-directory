# GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_documents** | [**GoogleCloudDocumentaiV1beta3BatchDatasetDocuments**](GoogleCloudDocumentaiV1beta3BatchDatasetDocuments.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_delete_documents_request import GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest from a JSON string
google_cloud_documentai_v1beta3_batch_delete_documents_request_instance = GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_delete_documents_request_dict = google_cloud_documentai_v1beta3_batch_delete_documents_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest from a dict
google_cloud_documentai_v1beta3_batch_delete_documents_request_from_dict = GoogleCloudDocumentaiV1beta3BatchDeleteDocumentsRequest.from_dict(google_cloud_documentai_v1beta3_batch_delete_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


