# GoogleCloudDocumentaiV1beta3BatchDatasetDocuments

Dataset documents that the batch operation will be applied to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | A filter matching the documents. Follows the same format and restriction as [google.cloud.documentai.master.ListDocumentsRequest.filter]. | [optional] 
**individual_document_ids** | [**GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds**](GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_dataset_documents import GoogleCloudDocumentaiV1beta3BatchDatasetDocuments

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchDatasetDocuments from a JSON string
google_cloud_documentai_v1beta3_batch_dataset_documents_instance = GoogleCloudDocumentaiV1beta3BatchDatasetDocuments.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchDatasetDocuments.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_dataset_documents_dict = google_cloud_documentai_v1beta3_batch_dataset_documents_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchDatasetDocuments from a dict
google_cloud_documentai_v1beta3_batch_dataset_documents_from_dict = GoogleCloudDocumentaiV1beta3BatchDatasetDocuments.from_dict(google_cloud_documentai_v1beta3_batch_dataset_documents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


