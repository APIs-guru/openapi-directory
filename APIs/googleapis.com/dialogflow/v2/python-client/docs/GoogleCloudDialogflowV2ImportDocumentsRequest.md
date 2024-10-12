# GoogleCloudDialogflowV2ImportDocumentsRequest

Request message for Documents.ImportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_template** | [**GoogleCloudDialogflowV2ImportDocumentTemplate**](GoogleCloudDialogflowV2ImportDocumentTemplate.md) |  | [optional] 
**gcs_source** | [**GoogleCloudDialogflowV2GcsSources**](GoogleCloudDialogflowV2GcsSources.md) |  | [optional] 
**import_gcs_custom_metadata** | **bool** | Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_import_documents_request import GoogleCloudDialogflowV2ImportDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ImportDocumentsRequest from a JSON string
google_cloud_dialogflow_v2_import_documents_request_instance = GoogleCloudDialogflowV2ImportDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ImportDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_import_documents_request_dict = google_cloud_dialogflow_v2_import_documents_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ImportDocumentsRequest from a dict
google_cloud_dialogflow_v2_import_documents_request_from_dict = GoogleCloudDialogflowV2ImportDocumentsRequest.from_dict(google_cloud_dialogflow_v2_import_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


