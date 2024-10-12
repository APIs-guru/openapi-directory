# GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds

List of individual DocumentIds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_ids** | [**List[GoogleCloudDocumentaiV1beta3DocumentId]**](GoogleCloudDocumentaiV1beta3DocumentId.md) | Required. List of Document IDs indicating where the actual documents are stored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_dataset_documents_individual_document_ids import GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds from a JSON string
google_cloud_documentai_v1beta3_batch_dataset_documents_individual_document_ids_instance = GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_dataset_documents_individual_document_ids_dict = google_cloud_documentai_v1beta3_batch_dataset_documents_individual_document_ids_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds from a dict
google_cloud_documentai_v1beta3_batch_dataset_documents_individual_document_ids_from_dict = GoogleCloudDocumentaiV1beta3BatchDatasetDocumentsIndividualDocumentIds.from_dict(google_cloud_documentai_v1beta3_batch_dataset_documents_individual_document_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


