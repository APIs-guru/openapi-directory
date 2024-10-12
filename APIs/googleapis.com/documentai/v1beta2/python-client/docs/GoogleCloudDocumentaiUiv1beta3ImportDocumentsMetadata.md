# GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata

Metadata of the import document operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata**](GoogleCloudDocumentaiUiv1beta3CommonOperationMetadata.md) |  | [optional] 
**import_config_validation_results** | [**List[GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult]**](GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult.md) | Validation statuses of the batch documents import config. | [optional] 
**individual_import_statuses** | [**List[GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus]**](GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus.md) | The list of response details of each document. | [optional] 
**total_document_count** | **int** | Total number of the documents that are qualified for importing. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_import_documents_metadata import GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata from a JSON string
google_cloud_documentai_uiv1beta3_import_documents_metadata_instance = GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_import_documents_metadata_dict = google_cloud_documentai_uiv1beta3_import_documents_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata from a dict
google_cloud_documentai_uiv1beta3_import_documents_metadata_from_dict = GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadata.from_dict(google_cloud_documentai_uiv1beta3_import_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


