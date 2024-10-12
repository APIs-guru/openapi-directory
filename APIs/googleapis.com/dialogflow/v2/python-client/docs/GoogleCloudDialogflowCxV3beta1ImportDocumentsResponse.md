# GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse

Response message for Documents.ImportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warnings** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Includes details about skipped documents or any other warnings. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_import_documents_response import GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_import_documents_response_instance = GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_import_documents_response_dict = google_cloud_dialogflow_cx_v3beta1_import_documents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse from a dict
google_cloud_dialogflow_cx_v3beta1_import_documents_response_from_dict = GoogleCloudDialogflowCxV3beta1ImportDocumentsResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_import_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


