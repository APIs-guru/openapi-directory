# GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig

Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business** | **str** | Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search. | [optional] 
**default_language_code** | **str** | Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. | [optional] 
**location** | **str** | Agent location for Agent creation, supported values: global/us/eu. If not provided, us Engine will create Agent using us-central-1 by default; eu Engine will create Agent using eu-west-1 by default. | [optional] 
**time_zone** | **str** | Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_engine_chat_engine_config_agent_creation_config import GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig from a JSON string
google_cloud_discoveryengine_v1_engine_chat_engine_config_agent_creation_config_instance = GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_engine_chat_engine_config_agent_creation_config_dict = google_cloud_discoveryengine_v1_engine_chat_engine_config_agent_creation_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig from a dict
google_cloud_discoveryengine_v1_engine_chat_engine_config_agent_creation_config_from_dict = GoogleCloudDiscoveryengineV1EngineChatEngineConfigAgentCreationConfig.from_dict(google_cloud_discoveryengine_v1_engine_chat_engine_config_agent_creation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


