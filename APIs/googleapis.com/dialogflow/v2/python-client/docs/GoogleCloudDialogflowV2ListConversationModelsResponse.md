# GoogleCloudDialogflowV2ListConversationModelsResponse

The response message for ConversationModels.ListConversationModels

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_models** | [**List[GoogleCloudDialogflowV2ConversationModel]**](GoogleCloudDialogflowV2ConversationModel.md) | The list of models to return. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_conversation_models_response import GoogleCloudDialogflowV2ListConversationModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListConversationModelsResponse from a JSON string
google_cloud_dialogflow_v2_list_conversation_models_response_instance = GoogleCloudDialogflowV2ListConversationModelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListConversationModelsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_conversation_models_response_dict = google_cloud_dialogflow_v2_list_conversation_models_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListConversationModelsResponse from a dict
google_cloud_dialogflow_v2_list_conversation_models_response_from_dict = GoogleCloudDialogflowV2ListConversationModelsResponse.from_dict(google_cloud_dialogflow_v2_list_conversation_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


