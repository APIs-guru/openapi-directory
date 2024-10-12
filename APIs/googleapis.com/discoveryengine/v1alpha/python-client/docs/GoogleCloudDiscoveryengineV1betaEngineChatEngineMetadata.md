# GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata

Additional information of a Chat Engine. Fields in this message are output only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dialogflow_agent** | **str** | The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: &#x60;projects//locations//agents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_engine_chat_engine_metadata import GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata from a JSON string
google_cloud_discoveryengine_v1beta_engine_chat_engine_metadata_instance = GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_engine_chat_engine_metadata_dict = google_cloud_discoveryengine_v1beta_engine_chat_engine_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata from a dict
google_cloud_discoveryengine_v1beta_engine_chat_engine_metadata_from_dict = GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata.from_dict(google_cloud_discoveryengine_v1beta_engine_chat_engine_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


