# GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus

The status of each individual document in the import process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_gcs_source** | **str** | The source Cloud Storage URI of the document. | [optional] 
**output_document_id** | [**GoogleCloudDocumentaiUiv1beta3DocumentId**](GoogleCloudDocumentaiUiv1beta3DocumentId.md) |  | [optional] 
**output_gcs_destination** | **str** | The output_gcs_destination of the processed document if it was successful, otherwise empty. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_import_documents_metadata_individual_import_status import GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus from a JSON string
google_cloud_documentai_uiv1beta3_import_documents_metadata_individual_import_status_instance = GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_import_documents_metadata_individual_import_status_dict = google_cloud_documentai_uiv1beta3_import_documents_metadata_individual_import_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus from a dict
google_cloud_documentai_uiv1beta3_import_documents_metadata_individual_import_status_from_dict = GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataIndividualImportStatus.from_dict(google_cloud_documentai_uiv1beta3_import_documents_metadata_individual_import_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


