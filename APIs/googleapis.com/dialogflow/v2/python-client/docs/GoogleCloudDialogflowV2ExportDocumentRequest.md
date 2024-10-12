# GoogleCloudDialogflowV2ExportDocumentRequest

Request message for Documents.ExportDocument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_full_content** | **bool** | When enabled, export the full content of the document including empirical probability. | [optional] 
**gcs_destination** | [**GoogleCloudDialogflowV2GcsDestination**](GoogleCloudDialogflowV2GcsDestination.md) |  | [optional] 
**smart_messaging_partial_update** | **bool** | When enabled, export the smart messaging allowlist document for partial update. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_export_document_request import GoogleCloudDialogflowV2ExportDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ExportDocumentRequest from a JSON string
google_cloud_dialogflow_v2_export_document_request_instance = GoogleCloudDialogflowV2ExportDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ExportDocumentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_export_document_request_dict = google_cloud_dialogflow_v2_export_document_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ExportDocumentRequest from a dict
google_cloud_dialogflow_v2_export_document_request_from_dict = GoogleCloudDialogflowV2ExportDocumentRequest.from_dict(google_cloud_dialogflow_v2_export_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


