# GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig

Configurations for a Chat Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_creation_config** | [**GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig**](GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig.md) |  | [optional] 
**dialogflow_agent_to_link** | **str** | The resource name of an exist Dialogflow agent to link to this Chat Engine. Customers can either provide &#x60;agent_creation_config&#x60; to create agent or provide an agent name that links the agent with the Chat engine. Format: &#x60;projects//locations//agents/&#x60;. Note that the &#x60;dialogflow_agent_to_link&#x60; are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. Please use ChatEngineMetadata.dialogflow_agent for actual agent association after Engine is created. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_engine_chat_engine_config import GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig from a JSON string
google_cloud_discoveryengine_v1alpha_engine_chat_engine_config_instance = GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_engine_chat_engine_config_dict = google_cloud_discoveryengine_v1alpha_engine_chat_engine_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig from a dict
google_cloud_discoveryengine_v1alpha_engine_chat_engine_config_from_dict = GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig.from_dict(google_cloud_discoveryengine_v1alpha_engine_chat_engine_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


