# GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse

The response message for ConversationModels.ListConversationModelEvaluations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_model_evaluations** | [**List[GoogleCloudDialogflowV2ConversationModelEvaluation]**](GoogleCloudDialogflowV2ConversationModelEvaluation.md) | The list of evaluations to return. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_conversation_model_evaluations_response import GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse from a JSON string
google_cloud_dialogflow_v2_list_conversation_model_evaluations_response_instance = GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_conversation_model_evaluations_response_dict = google_cloud_dialogflow_v2_list_conversation_model_evaluations_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse from a dict
google_cloud_dialogflow_v2_list_conversation_model_evaluations_response_from_dict = GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse.from_dict(google_cloud_dialogflow_v2_list_conversation_model_evaluations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


