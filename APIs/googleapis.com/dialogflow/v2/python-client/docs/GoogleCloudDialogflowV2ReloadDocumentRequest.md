# GoogleCloudDialogflowV2ReloadDocumentRequest

Request message for Documents.ReloadDocument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_uri** | **str** | Optional. The path of gcs source file for reloading document content. For now, only gcs uri is supported. For documents stored in Google Cloud Storage, these URIs must have the form &#x60;gs:///&#x60;. | [optional] 
**import_gcs_custom_metadata** | **bool** | Optional. Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI. | [optional] 
**smart_messaging_partial_update** | **bool** | Optional. When enabled, the reload request is to apply partial update to the smart messaging allowlist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_reload_document_request import GoogleCloudDialogflowV2ReloadDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ReloadDocumentRequest from a JSON string
google_cloud_dialogflow_v2_reload_document_request_instance = GoogleCloudDialogflowV2ReloadDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ReloadDocumentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_reload_document_request_dict = google_cloud_dialogflow_v2_reload_document_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ReloadDocumentRequest from a dict
google_cloud_dialogflow_v2_reload_document_request_from_dict = GoogleCloudDialogflowV2ReloadDocumentRequest.from_dict(google_cloud_dialogflow_v2_reload_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


