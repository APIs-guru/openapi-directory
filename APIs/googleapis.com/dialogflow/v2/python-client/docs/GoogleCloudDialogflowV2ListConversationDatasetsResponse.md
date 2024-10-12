# GoogleCloudDialogflowV2ListConversationDatasetsResponse

The response message for ConversationDatasets.ListConversationDatasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_datasets** | [**List[GoogleCloudDialogflowV2ConversationDataset]**](GoogleCloudDialogflowV2ConversationDataset.md) | The list of datasets to return. | [optional] 
**next_page_token** | **str** | The token to use to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_conversation_datasets_response import GoogleCloudDialogflowV2ListConversationDatasetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListConversationDatasetsResponse from a JSON string
google_cloud_dialogflow_v2_list_conversation_datasets_response_instance = GoogleCloudDialogflowV2ListConversationDatasetsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListConversationDatasetsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_conversation_datasets_response_dict = google_cloud_dialogflow_v2_list_conversation_datasets_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListConversationDatasetsResponse from a dict
google_cloud_dialogflow_v2_list_conversation_datasets_response_from_dict = GoogleCloudDialogflowV2ListConversationDatasetsResponse.from_dict(google_cloud_dialogflow_v2_list_conversation_datasets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


