# GoogleCloudDialogflowV2beta1ImportDocumentsRequest

Request message for Documents.ImportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_template** | [**GoogleCloudDialogflowV2beta1ImportDocumentTemplate**](GoogleCloudDialogflowV2beta1ImportDocumentTemplate.md) |  | [optional] 
**gcs_source** | [**GoogleCloudDialogflowV2beta1GcsSources**](GoogleCloudDialogflowV2beta1GcsSources.md) |  | [optional] 
**import_gcs_custom_metadata** | **bool** | Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_import_documents_request import GoogleCloudDialogflowV2beta1ImportDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ImportDocumentsRequest from a JSON string
google_cloud_dialogflow_v2beta1_import_documents_request_instance = GoogleCloudDialogflowV2beta1ImportDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ImportDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_import_documents_request_dict = google_cloud_dialogflow_v2beta1_import_documents_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ImportDocumentsRequest from a dict
google_cloud_dialogflow_v2beta1_import_documents_request_from_dict = GoogleCloudDialogflowV2beta1ImportDocumentsRequest.from_dict(google_cloud_dialogflow_v2beta1_import_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


