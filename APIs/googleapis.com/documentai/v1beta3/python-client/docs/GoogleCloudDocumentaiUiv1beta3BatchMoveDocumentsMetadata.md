# GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata**](GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.md) |  | [optional] 
**dest_dataset_type** | **str** | The destination dataset split type. | [optional] 
**dest_split_type** | **str** | The destination dataset split type. | [optional] 
**individual_batch_move_statuses** | [**List[GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus]**](GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadataIndividualBatchMoveStatus.md) | The list of response details of each document. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_batch_move_documents_metadata import GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata from a JSON string
google_cloud_documentai_uiv1beta3_batch_move_documents_metadata_instance = GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_batch_move_documents_metadata_dict = google_cloud_documentai_uiv1beta3_batch_move_documents_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata from a dict
google_cloud_documentai_uiv1beta3_batch_move_documents_metadata_from_dict = GoogleCloudDocumentaiUiv1beta3BatchMoveDocumentsMetadata.from_dict(google_cloud_documentai_uiv1beta3_batch_move_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


