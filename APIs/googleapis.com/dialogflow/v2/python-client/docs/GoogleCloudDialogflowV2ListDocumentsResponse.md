# GoogleCloudDialogflowV2ListDocumentsResponse

Response message for Documents.ListDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[GoogleCloudDialogflowV2Document]**](GoogleCloudDialogflowV2Document.md) | The list of documents. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_documents_response import GoogleCloudDialogflowV2ListDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListDocumentsResponse from a JSON string
google_cloud_dialogflow_v2_list_documents_response_instance = GoogleCloudDialogflowV2ListDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_documents_response_dict = google_cloud_dialogflow_v2_list_documents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListDocumentsResponse from a dict
google_cloud_dialogflow_v2_list_documents_response_from_dict = GoogleCloudDialogflowV2ListDocumentsResponse.from_dict(google_cloud_dialogflow_v2_list_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


