# GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus

The status of each individual document in the batch delete process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | [**GoogleCloudDocumentaiUiv1beta3DocumentId**](GoogleCloudDocumentaiUiv1beta3DocumentId.md) |  | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_individual_batch_delete_status import GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus from a JSON string
google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_individual_batch_delete_status_instance = GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_individual_batch_delete_status_dict = google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_individual_batch_delete_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus from a dict
google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_individual_batch_delete_status_from_dict = GoogleCloudDocumentaiUiv1beta3BatchDeleteDocumentsMetadataIndividualBatchDeleteStatus.from_dict(google_cloud_documentai_uiv1beta3_batch_delete_documents_metadata_individual_batch_delete_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


