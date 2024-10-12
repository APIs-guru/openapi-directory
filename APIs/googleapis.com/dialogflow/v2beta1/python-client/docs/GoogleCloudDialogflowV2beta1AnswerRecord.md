# GoogleCloudDialogflowV2beta1AnswerRecord

Answer records are records to manage answer history and feedbacks for Dialogflow. Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - `DetectIntent` intent matching - `DetectIntent` knowledge Answer records are not related to the conversation history in the Dialogflow Console. A Record is generated even when the end-user disables conversation history in the console. Records are created when there's a human agent assistant suggestion generated. A typical workflow for customers provide feedback to an answer is: 1. For human agent assistant, customers get suggestion via ListSuggestions API. Together with the answers, AnswerRecord.name are returned to the customers. 2. The customer uses the AnswerRecord.name to call the UpdateAnswerRecord method to send feedback about a specific answer that they believe is wrong.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_assistant_record** | [**GoogleCloudDialogflowV2beta1AgentAssistantRecord**](GoogleCloudDialogflowV2beta1AgentAssistantRecord.md) |  | [optional] 
**answer_feedback** | [**GoogleCloudDialogflowV2beta1AnswerFeedback**](GoogleCloudDialogflowV2beta1AnswerFeedback.md) |  | [optional] 
**name** | **str** | The unique identifier of this answer record. Required for AnswerRecords.UpdateAnswerRecord method. Format: &#x60;projects//locations//answerRecords/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_answer_record import GoogleCloudDialogflowV2beta1AnswerRecord

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1AnswerRecord from a JSON string
google_cloud_dialogflow_v2beta1_answer_record_instance = GoogleCloudDialogflowV2beta1AnswerRecord.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1AnswerRecord.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_answer_record_dict = google_cloud_dialogflow_v2beta1_answer_record_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1AnswerRecord from a dict
google_cloud_dialogflow_v2beta1_answer_record_from_dict = GoogleCloudDialogflowV2beta1AnswerRecord.from_dict(google_cloud_dialogflow_v2beta1_answer_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


