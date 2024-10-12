# GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest

The request message for ConversationModels.CreateConversationModelEvaluation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_model_evaluation** | [**GoogleCloudDialogflowV2ConversationModelEvaluation**](GoogleCloudDialogflowV2ConversationModelEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_create_conversation_model_evaluation_request import GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest from a JSON string
google_cloud_dialogflow_v2_create_conversation_model_evaluation_request_instance = GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_create_conversation_model_evaluation_request_dict = google_cloud_dialogflow_v2_create_conversation_model_evaluation_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest from a dict
google_cloud_dialogflow_v2_create_conversation_model_evaluation_request_from_dict = GoogleCloudDialogflowV2CreateConversationModelEvaluationRequest.from_dict(google_cloud_dialogflow_v2_create_conversation_model_evaluation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


