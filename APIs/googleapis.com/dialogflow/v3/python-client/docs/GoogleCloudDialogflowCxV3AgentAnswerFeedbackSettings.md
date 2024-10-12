# GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings

Settings for answer feedback collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_answer_feedback** | **bool** | Optional. If enabled, end users will be able to provide answer feedback to Dialogflow responses. Feature works only if interaction logging is enabled in the Dialogflow agent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_agent_answer_feedback_settings import GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings from a JSON string
google_cloud_dialogflow_cx_v3_agent_answer_feedback_settings_instance = GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_agent_answer_feedback_settings_dict = google_cloud_dialogflow_cx_v3_agent_answer_feedback_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings from a dict
google_cloud_dialogflow_cx_v3_agent_answer_feedback_settings_from_dict = GoogleCloudDialogflowCxV3AgentAnswerFeedbackSettings.from_dict(google_cloud_dialogflow_cx_v3_agent_answer_feedback_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


