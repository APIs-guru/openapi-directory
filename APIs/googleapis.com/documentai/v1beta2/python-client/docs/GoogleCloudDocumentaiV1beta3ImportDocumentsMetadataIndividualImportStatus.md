# GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus

The status of each individual document in the import process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_gcs_source** | **str** | The source Cloud Storage URI of the document. | [optional] 
**output_document_id** | [**GoogleCloudDocumentaiV1beta3DocumentId**](GoogleCloudDocumentaiV1beta3DocumentId.md) |  | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_import_documents_metadata_individual_import_status import GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus from a JSON string
google_cloud_documentai_v1beta3_import_documents_metadata_individual_import_status_instance = GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_import_documents_metadata_individual_import_status_dict = google_cloud_documentai_v1beta3_import_documents_metadata_individual_import_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus from a dict
google_cloud_documentai_v1beta3_import_documents_metadata_individual_import_status_from_dict = GoogleCloudDocumentaiV1beta3ImportDocumentsMetadataIndividualImportStatus.from_dict(google_cloud_documentai_v1beta3_import_documents_metadata_individual_import_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


