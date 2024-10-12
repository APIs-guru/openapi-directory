# GoogleCloudDialogflowV2beta1ReloadDocumentRequest

Request message for Documents.ReloadDocument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudDialogflowV2beta1GcsSource**](GoogleCloudDialogflowV2beta1GcsSource.md) |  | [optional] 
**import_gcs_custom_metadata** | **bool** | Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_reload_document_request import GoogleCloudDialogflowV2beta1ReloadDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ReloadDocumentRequest from a JSON string
google_cloud_dialogflow_v2beta1_reload_document_request_instance = GoogleCloudDialogflowV2beta1ReloadDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ReloadDocumentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_reload_document_request_dict = google_cloud_dialogflow_v2beta1_reload_document_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ReloadDocumentRequest from a dict
google_cloud_dialogflow_v2beta1_reload_document_request_from_dict = GoogleCloudDialogflowV2beta1ReloadDocumentRequest.from_dict(google_cloud_dialogflow_v2beta1_reload_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


