# GoogleCloudDialogflowV2AgentAssistantRecord

Represents a record of a human agent assist answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_suggestion_answer** | [**GoogleCloudDialogflowV2ArticleAnswer**](GoogleCloudDialogflowV2ArticleAnswer.md) |  | [optional] 
**dialogflow_assist_answer** | [**GoogleCloudDialogflowV2DialogflowAssistAnswer**](GoogleCloudDialogflowV2DialogflowAssistAnswer.md) |  | [optional] 
**faq_answer** | [**GoogleCloudDialogflowV2FaqAnswer**](GoogleCloudDialogflowV2FaqAnswer.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_agent_assistant_record import GoogleCloudDialogflowV2AgentAssistantRecord

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AgentAssistantRecord from a JSON string
google_cloud_dialogflow_v2_agent_assistant_record_instance = GoogleCloudDialogflowV2AgentAssistantRecord.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AgentAssistantRecord.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_agent_assistant_record_dict = google_cloud_dialogflow_v2_agent_assistant_record_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AgentAssistantRecord from a dict
google_cloud_dialogflow_v2_agent_assistant_record_from_dict = GoogleCloudDialogflowV2AgentAssistantRecord.from_dict(google_cloud_dialogflow_v2_agent_assistant_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


