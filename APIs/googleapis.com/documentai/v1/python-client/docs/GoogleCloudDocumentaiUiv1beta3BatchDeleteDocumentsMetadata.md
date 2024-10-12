# GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata**](GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.md) |  | [optional] 
**error_document_count** | **int** | Total number of documents that failed to be deleted in storage. | [optional] 
**individual_batch_delete_statuses** | [**List[GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus]**](GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus.md) | The list of response details of each document. | [optional] 
**total_document_count** | **int** | Total number of documents deleting from dataset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata import GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata from a JSON string
google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_instance = GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_dict = google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata from a dict
google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_from_dict = GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadata.from_dict(google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


