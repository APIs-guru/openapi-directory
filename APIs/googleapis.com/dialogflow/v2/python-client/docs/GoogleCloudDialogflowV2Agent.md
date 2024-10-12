# GoogleCloudDialogflowV2Agent

A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | Optional. API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query different service endpoints for different API versions. However, bots connectors and webhook calls will follow the specified API version. | [optional] 
**avatar_uri** | **str** | Optional. The URI of the agent&#39;s avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration. | [optional] 
**classification_threshold** | **float** | Optional. To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used. | [optional] 
**default_language_code** | **str** | Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the &#x60;Update&#x60; method. | [optional] 
**description** | **str** | Optional. The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. | [optional] 
**display_name** | **str** | Required. The name of this agent. | [optional] 
**enable_logging** | **bool** | Optional. Determines whether this agent should log conversation queries. | [optional] 
**match_mode** | **str** | Optional. Determines how intents are detected from user queries. | [optional] 
**parent** | **str** | Required. The project of this agent. Format: &#x60;projects/&#x60;. | [optional] 
**supported_language_codes** | **List[str]** | Optional. The list of all languages supported by this agent (except for the &#x60;default_language_code&#x60;). | [optional] 
**tier** | **str** | Optional. The agent tier. If not specified, TIER_STANDARD is assumed. | [optional] 
**time_zone** | **str** | Required. The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_agent import GoogleCloudDialogflowV2Agent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2Agent from a JSON string
google_cloud_dialogflow_v2_agent_instance = GoogleCloudDialogflowV2Agent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2Agent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_agent_dict = google_cloud_dialogflow_v2_agent_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2Agent from a dict
google_cloud_dialogflow_v2_agent_from_dict = GoogleCloudDialogflowV2Agent.from_dict(google_cloud_dialogflow_v2_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


