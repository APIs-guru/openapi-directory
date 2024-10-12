# GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig

Config for importing documents. Each batch can have its own dataset split type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_split_config** | [**GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfigAutoSplitConfig**](GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfigAutoSplitConfig.md) |  | [optional] 
**batch_input_config** | [**GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig**](GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig.md) |  | [optional] 
**dataset_split** | **str** | Target dataset split where the documents must be stored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_import_documents_request_batch_documents_import_config import GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig from a JSON string
google_cloud_documentai_v1beta3_import_documents_request_batch_documents_import_config_instance = GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_import_documents_request_batch_documents_import_config_dict = google_cloud_documentai_v1beta3_import_documents_request_batch_documents_import_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig from a dict
google_cloud_documentai_v1beta3_import_documents_request_batch_documents_import_config_from_dict = GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig.from_dict(google_cloud_documentai_v1beta3_import_documents_request_batch_documents_import_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


