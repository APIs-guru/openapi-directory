# GoogleCloudDialogflowV2beta1ConversationProfile

Defines the services to connect to incoming Dialogflow conversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automated_agent_config** | [**GoogleCloudDialogflowV2beta1AutomatedAgentConfig**](GoogleCloudDialogflowV2beta1AutomatedAgentConfig.md) |  | [optional] 
**create_time** | **str** | Output only. Create time of the conversation profile. | [optional] [readonly] 
**display_name** | **str** | Required. Human readable name for this profile. Max length 1024 bytes. | [optional] 
**human_agent_assistant_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig.md) |  | [optional] 
**human_agent_handoff_config** | [**GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig**](GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig.md) |  | [optional] 
**language_code** | **str** | Language code for the conversation profile. If not specified, the language is en-US. Language at ConversationProfile should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: \&quot;en-US\&quot;. | [optional] 
**logging_config** | [**GoogleCloudDialogflowV2beta1LoggingConfig**](GoogleCloudDialogflowV2beta1LoggingConfig.md) |  | [optional] 
**name** | **str** | The unique identifier of this conversation profile. Format: &#x60;projects//locations//conversationProfiles/&#x60;. | [optional] 
**new_message_event_notification_config** | [**GoogleCloudDialogflowV2beta1NotificationConfig**](GoogleCloudDialogflowV2beta1NotificationConfig.md) |  | [optional] 
**notification_config** | [**GoogleCloudDialogflowV2beta1NotificationConfig**](GoogleCloudDialogflowV2beta1NotificationConfig.md) |  | [optional] 
**security_settings** | **str** | Name of the CX SecuritySettings reference for the agent. Format: &#x60;projects//locations//securitySettings/&#x60;. | [optional] 
**stt_config** | [**GoogleCloudDialogflowV2beta1SpeechToTextConfig**](GoogleCloudDialogflowV2beta1SpeechToTextConfig.md) |  | [optional] 
**time_zone** | **str** | The time zone of this conversational profile from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. Defaults to America/New_York. | [optional] 
**tts_config** | [**GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig**](GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig.md) |  | [optional] 
**update_time** | **str** | Output only. Update time of the conversation profile. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_conversation_profile import GoogleCloudDialogflowV2beta1ConversationProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ConversationProfile from a JSON string
google_cloud_dialogflow_v2beta1_conversation_profile_instance = GoogleCloudDialogflowV2beta1ConversationProfile.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ConversationProfile.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_conversation_profile_dict = google_cloud_dialogflow_v2beta1_conversation_profile_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ConversationProfile from a dict
google_cloud_dialogflow_v2beta1_conversation_profile_from_dict = GoogleCloudDialogflowV2beta1ConversationProfile.from_dict(google_cloud_dialogflow_v2beta1_conversation_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


