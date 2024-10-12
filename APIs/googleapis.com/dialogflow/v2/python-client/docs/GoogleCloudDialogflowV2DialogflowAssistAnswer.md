# GoogleCloudDialogflowV2DialogflowAssistAnswer

Represents a Dialogflow assist answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | The name of answer record, in the format of \&quot;projects//locations//answerRecords/\&quot; | [optional] 
**intent_suggestion** | [**GoogleCloudDialogflowV2IntentSuggestion**](GoogleCloudDialogflowV2IntentSuggestion.md) |  | [optional] 
**query_result** | [**GoogleCloudDialogflowV2QueryResult**](GoogleCloudDialogflowV2QueryResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_dialogflow_assist_answer import GoogleCloudDialogflowV2DialogflowAssistAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2DialogflowAssistAnswer from a JSON string
google_cloud_dialogflow_v2_dialogflow_assist_answer_instance = GoogleCloudDialogflowV2DialogflowAssistAnswer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2DialogflowAssistAnswer.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_dialogflow_assist_answer_dict = google_cloud_dialogflow_v2_dialogflow_assist_answer_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2DialogflowAssistAnswer from a dict
google_cloud_dialogflow_v2_dialogflow_assist_answer_from_dict = GoogleCloudDialogflowV2DialogflowAssistAnswer.from_dict(google_cloud_dialogflow_v2_dialogflow_assist_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


