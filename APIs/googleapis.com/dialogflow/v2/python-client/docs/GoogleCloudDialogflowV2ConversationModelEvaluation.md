# GoogleCloudDialogflowV2ConversationModelEvaluation

Represents evaluation result of a conversation model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this model. | [optional] [readonly] 
**display_name** | **str** | Optional. The display name of the model evaluation. At most 64 bytes long. | [optional] 
**evaluation_config** | [**GoogleCloudDialogflowV2EvaluationConfig**](GoogleCloudDialogflowV2EvaluationConfig.md) |  | [optional] 
**name** | **str** | The resource name of the evaluation. Format: &#x60;projects//conversationModels//evaluations/&#x60; | [optional] 
**raw_human_eval_template_csv** | **str** | Output only. Human eval template in csv format. It tooks real-world conversations provided through input dataset, generates example suggestions for customer to verify quality of the model. For Smart Reply, the generated csv file contains columns of Context, (Suggestions,Q1,Q2)*3, Actual reply. Context contains at most 10 latest messages in the conversation prior to the current suggestion. Q1: \&quot;Would you send it as the next message of agent?\&quot; Evaluated based on whether the suggest is appropriate to be sent by agent in current context. Q2: \&quot;Does the suggestion move the conversation closer to resolution?\&quot; Evaluated based on whether the suggestion provide solutions, or answers customer&#39;s question or collect information from customer to resolve the customer&#39;s issue. Actual reply column contains the actual agent reply sent in the context. | [optional] [readonly] 
**smart_reply_metrics** | [**GoogleCloudDialogflowV2SmartReplyMetrics**](GoogleCloudDialogflowV2SmartReplyMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_conversation_model_evaluation import GoogleCloudDialogflowV2ConversationModelEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ConversationModelEvaluation from a JSON string
google_cloud_dialogflow_v2_conversation_model_evaluation_instance = GoogleCloudDialogflowV2ConversationModelEvaluation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ConversationModelEvaluation.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_conversation_model_evaluation_dict = google_cloud_dialogflow_v2_conversation_model_evaluation_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ConversationModelEvaluation from a dict
google_cloud_dialogflow_v2_conversation_model_evaluation_from_dict = GoogleCloudDialogflowV2ConversationModelEvaluation.from_dict(google_cloud_dialogflow_v2_conversation_model_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


