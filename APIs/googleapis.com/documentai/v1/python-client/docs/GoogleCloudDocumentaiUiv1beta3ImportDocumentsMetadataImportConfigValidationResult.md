# GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult

The validation status of each import config. Status is set to an error if there are no documents to import in the `import_config`, or `OK` if the operation will try to proceed with at least one document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_gcs_source** | **str** | The source Cloud Storage URI specified in the import config. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_import_documents_metadata_import_config_validation_result import GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult from a JSON string
google_cloud_documentai_uiv1beta3_import_documents_metadata_import_config_validation_result_instance = GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_import_documents_metadata_import_config_validation_result_dict = google_cloud_documentai_uiv1beta3_import_documents_metadata_import_config_validation_result_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult from a dict
google_cloud_documentai_uiv1beta3_import_documents_metadata_import_config_validation_result_from_dict = GoogleCloudDocumentaiUiv1beta3ImportDocumentsMetadataImportConfigValidationResult.from_dict(google_cloud_documentai_uiv1beta3_import_documents_metadata_import_config_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


