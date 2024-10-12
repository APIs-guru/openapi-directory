# GoogleCloudDialogflowCxV3beta1Agent

Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, TransitionRouteGroups and so on to manage the conversation flows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_settings** | [**GoogleCloudDialogflowCxV3beta1AdvancedSettings**](GoogleCloudDialogflowCxV3beta1AdvancedSettings.md) |  | [optional] 
**answer_feedback_settings** | [**GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings**](GoogleCloudDialogflowCxV3beta1AgentAnswerFeedbackSettings.md) |  | [optional] 
**avatar_uri** | **str** | The URI of the agent&#39;s avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration. | [optional] 
**default_language_code** | **str** | Required. Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method. | [optional] 
**description** | **str** | The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected. | [optional] 
**display_name** | **str** | Required. The human-readable name of the agent, unique within the location. | [optional] 
**enable_spell_correction** | **bool** | Indicates if automatic spell correction is enabled in detect intent requests. | [optional] 
**enable_stackdriver_logging** | **bool** | Indicates if stackdriver logging is enabled for the agent. Please use agent.advanced_settings instead. | [optional] 
**gen_app_builder_settings** | [**GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings**](GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings.md) |  | [optional] 
**git_integration_settings** | [**GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings**](GoogleCloudDialogflowCxV3beta1AgentGitIntegrationSettings.md) |  | [optional] 
**locked** | **bool** | Indicates whether the agent is locked for changes. If the agent is locked, modifications to the agent will be rejected except for RestoreAgent. | [optional] 
**name** | **str** | The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: &#x60;projects//locations//agents/&#x60;. | [optional] 
**security_settings** | **str** | Name of the SecuritySettings reference for the agent. Format: &#x60;projects//locations//securitySettings/&#x60;. | [optional] 
**speech_to_text_settings** | [**GoogleCloudDialogflowCxV3beta1SpeechToTextSettings**](GoogleCloudDialogflowCxV3beta1SpeechToTextSettings.md) |  | [optional] 
**start_flow** | **str** | Immutable. Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: &#x60;projects//locations//agents//flows/&#x60;. | [optional] 
**supported_language_codes** | **List[str]** | The list of all languages supported by the agent (except for the &#x60;default_language_code&#x60;). | [optional] 
**text_to_speech_settings** | [**GoogleCloudDialogflowCxV3beta1TextToSpeechSettings**](GoogleCloudDialogflowCxV3beta1TextToSpeechSettings.md) |  | [optional] 
**time_zone** | **str** | Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_agent import GoogleCloudDialogflowCxV3beta1Agent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Agent from a JSON string
google_cloud_dialogflow_cx_v3beta1_agent_instance = GoogleCloudDialogflowCxV3beta1Agent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Agent.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_agent_dict = google_cloud_dialogflow_cx_v3beta1_agent_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Agent from a dict
google_cloud_dialogflow_cx_v3beta1_agent_from_dict = GoogleCloudDialogflowCxV3beta1Agent.from_dict(google_cloud_dialogflow_cx_v3beta1_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


