# GoogleCloudDiscoveryengineV1EngineChatEngineMetadata

Additional information of a Chat Engine. Fields in this message are output only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dialogflow_agent** | **str** | The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: &#x60;projects//locations//agents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_engine_chat_engine_metadata import GoogleCloudDiscoveryengineV1EngineChatEngineMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1EngineChatEngineMetadata from a JSON string
google_cloud_discoveryengine_v1_engine_chat_engine_metadata_instance = GoogleCloudDiscoveryengineV1EngineChatEngineMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1EngineChatEngineMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_engine_chat_engine_metadata_dict = google_cloud_discoveryengine_v1_engine_chat_engine_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1EngineChatEngineMetadata from a dict
google_cloud_discoveryengine_v1_engine_chat_engine_metadata_from_dict = GoogleCloudDiscoveryengineV1EngineChatEngineMetadata.from_dict(google_cloud_discoveryengine_v1_engine_chat_engine_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


