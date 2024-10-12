# GoogleCloudDiscoveryengineV1betaEngine

Metadata that describes the training and serving parameters of an Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_engine_config** | [**GoogleCloudDiscoveryengineV1betaEngineChatEngineConfig**](GoogleCloudDiscoveryengineV1betaEngineChatEngineConfig.md) |  | [optional] 
**chat_engine_metadata** | [**GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata**](GoogleCloudDiscoveryengineV1betaEngineChatEngineMetadata.md) |  | [optional] 
**common_config** | [**GoogleCloudDiscoveryengineV1betaEngineCommonConfig**](GoogleCloudDiscoveryengineV1betaEngineCommonConfig.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp the Recommendation Engine was created at. | [optional] [readonly] 
**data_store_ids** | **List[str]** | The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary initializations. | [optional] 
**display_name** | **str** | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. | [optional] 
**industry_vertical** | **str** | The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to &#x60;GENERIC&#x60;. Vertical on Engine has to match vertical of the DataStore liniked to the engine. | [optional] 
**name** | **str** | Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: &#x60;projects/{project_number}/locations/{location}/collections/{collection}/engines/{engine}&#x60; engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**search_engine_config** | [**GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig**](GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig.md) |  | [optional] 
**solution_type** | **str** | Required. The solutions of the engine. | [optional] 
**update_time** | **str** | Output only. Timestamp the Recommendation Engine was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_engine import GoogleCloudDiscoveryengineV1betaEngine

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaEngine from a JSON string
google_cloud_discoveryengine_v1beta_engine_instance = GoogleCloudDiscoveryengineV1betaEngine.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaEngine.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_engine_dict = google_cloud_discoveryengine_v1beta_engine_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaEngine from a dict
google_cloud_discoveryengine_v1beta_engine_from_dict = GoogleCloudDiscoveryengineV1betaEngine.from_dict(google_cloud_discoveryengine_v1beta_engine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


