# GoogleCloudDialogflowV2beta1Intent

An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces. | [optional] 
**default_response_platforms** | **List[str]** | Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). | [optional] 
**display_name** | **str** | Required. The name of this intent. | [optional] 
**end_interaction** | **bool** | Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false. | [optional] 
**events** | **List[str]** | Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters. | [optional] 
**followup_intent_info** | [**List[GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo]**](GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo.md) | Output only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output. | [optional] [readonly] 
**input_context_names** | **List[str]** | Optional. The list of context names required for this intent to be triggered. Formats: - &#x60;projects//agent/sessions/-/contexts/&#x60; - &#x60;projects//locations//agent/sessions/-/contexts/&#x60; | [optional] 
**is_fallback** | **bool** | Optional. Indicates whether this is a fallback intent. | [optional] 
**live_agent_handoff** | **bool** | Optional. Indicates that a live agent should be brought in to handle the interaction with the user. In most cases, when you set this flag to true, you would also want to set end_interaction to true as well. Default is false. | [optional] 
**messages** | [**List[GoogleCloudDialogflowV2beta1IntentMessage]**](GoogleCloudDialogflowV2beta1IntentMessage.md) | Optional. The collection of rich messages corresponding to the &#x60;Response&#x60; field in the Dialogflow console. | [optional] 
**ml_disabled** | **bool** | Optional. Indicates whether Machine Learning is disabled for the intent. Note: If &#x60;ml_disabled&#x60; setting is set to true, then this intent is not taken into account during inference in &#x60;ML ONLY&#x60; match mode. Also, auto-markup in the UI is turned off. | [optional] 
**ml_enabled** | **bool** | Optional. Indicates whether Machine Learning is enabled for the intent. Note: If &#x60;ml_enabled&#x60; setting is set to false, then this intent is not taken into account during inference in &#x60;ML ONLY&#x60; match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use &#x60;ml_disabled&#x60; field instead. NOTE: If both &#x60;ml_enabled&#x60; and &#x60;ml_disabled&#x60; are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is: ml_enabled &#x3D; false / ml_disabled &#x3D; true. - After April 15th, 2018 the default is: ml_enabled &#x3D; true / ml_disabled &#x3D; false. | [optional] 
**name** | **str** | Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - &#x60;projects//agent/intents/&#x60; - &#x60;projects//locations//agent/intents/&#x60; | [optional] 
**output_contexts** | [**List[GoogleCloudDialogflowV2beta1Context]**](GoogleCloudDialogflowV2beta1Context.md) | Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the &#x60;lifespan_count&#x60; to 0 will reset the context when the intent is matched. Format: &#x60;projects//agent/sessions/-/contexts/&#x60;. | [optional] 
**parameters** | [**List[GoogleCloudDialogflowV2beta1IntentParameter]**](GoogleCloudDialogflowV2beta1IntentParameter.md) | Optional. The collection of parameters associated with the intent. | [optional] 
**parent_followup_intent_name** | **str** | Optional. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: &#x60;projects//agent/intents/&#x60;. | [optional] 
**priority** | **int** | Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the &#x60;Normal&#x60; priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests. | [optional] 
**reset_contexts** | **bool** | Optional. Indicates whether to delete all contexts in the current session when this intent is matched. | [optional] 
**root_followup_intent_name** | **str** | Output only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. Format: &#x60;projects//agent/intents/&#x60;. | [optional] [readonly] 
**training_phrases** | [**List[GoogleCloudDialogflowV2beta1IntentTrainingPhrase]**](GoogleCloudDialogflowV2beta1IntentTrainingPhrase.md) | Optional. The collection of examples that the agent is trained on. | [optional] 
**webhook_state** | **str** | Optional. Indicates whether webhooks are enabled for the intent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent import GoogleCloudDialogflowV2beta1Intent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1Intent from a JSON string
google_cloud_dialogflow_v2beta1_intent_instance = GoogleCloudDialogflowV2beta1Intent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1Intent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_dict = google_cloud_dialogflow_v2beta1_intent_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1Intent from a dict
google_cloud_dialogflow_v2beta1_intent_from_dict = GoogleCloudDialogflowV2beta1Intent.from_dict(google_cloud_dialogflow_v2beta1_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


