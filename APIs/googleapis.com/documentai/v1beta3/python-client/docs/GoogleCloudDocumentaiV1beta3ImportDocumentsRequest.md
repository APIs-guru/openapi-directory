# GoogleCloudDocumentaiV1beta3ImportDocumentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_documents_import_configs** | [**List[GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig]**](GoogleCloudDocumentaiV1beta3ImportDocumentsRequestBatchDocumentsImportConfig.md) | Required. The Cloud Storage uri containing raw documents that must be imported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_import_documents_request import GoogleCloudDocumentaiV1beta3ImportDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ImportDocumentsRequest from a JSON string
google_cloud_documentai_v1beta3_import_documents_request_instance = GoogleCloudDocumentaiV1beta3ImportDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ImportDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_import_documents_request_dict = google_cloud_documentai_v1beta3_import_documents_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ImportDocumentsRequest from a dict
google_cloud_documentai_v1beta3_import_documents_request_from_dict = GoogleCloudDocumentaiV1beta3ImportDocumentsRequest.from_dict(google_cloud_documentai_v1beta3_import_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


