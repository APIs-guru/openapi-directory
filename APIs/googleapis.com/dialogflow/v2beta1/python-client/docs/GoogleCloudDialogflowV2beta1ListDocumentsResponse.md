# GoogleCloudDialogflowV2beta1ListDocumentsResponse

Response message for Documents.ListDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[GoogleCloudDialogflowV2beta1Document]**](GoogleCloudDialogflowV2beta1Document.md) | The list of documents. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_list_documents_response import GoogleCloudDialogflowV2beta1ListDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ListDocumentsResponse from a JSON string
google_cloud_dialogflow_v2beta1_list_documents_response_instance = GoogleCloudDialogflowV2beta1ListDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ListDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_list_documents_response_dict = google_cloud_dialogflow_v2beta1_list_documents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ListDocumentsResponse from a dict
google_cloud_dialogflow_v2beta1_list_documents_response_from_dict = GoogleCloudDialogflowV2beta1ListDocumentsResponse.from_dict(google_cloud_dialogflow_v2beta1_list_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


