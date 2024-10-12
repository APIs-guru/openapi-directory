# GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus

The status of each individual document in the batch update process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | [**GoogleCloudDocumentaiUiv1beta3DocumentId**](GoogleCloudDocumentaiUiv1beta3DocumentId.md) |  | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_batch_update_documents_metadata_individual_batch_update_status import GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus from a JSON string
google_cloud_documentai_uiv1beta3_batch_update_documents_metadata_individual_batch_update_status_instance = GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_batch_update_documents_metadata_individual_batch_update_status_dict = google_cloud_documentai_uiv1beta3_batch_update_documents_metadata_individual_batch_update_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus from a dict
google_cloud_documentai_uiv1beta3_batch_update_documents_metadata_individual_batch_update_status_from_dict = GoogleCloudDocumentaiUiv1beta3BatchUpdateDocumentsMetadataIndividualBatchUpdateStatus.from_dict(google_cloud_documentai_uiv1beta3_batch_update_documents_metadata_individual_batch_update_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


