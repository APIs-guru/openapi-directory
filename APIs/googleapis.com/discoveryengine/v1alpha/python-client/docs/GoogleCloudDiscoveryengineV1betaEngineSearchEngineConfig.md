# GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig

Configurations for a Search Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_add_ons** | **List[str]** | The add-on that this search engine enables. | [optional] 
**search_tier** | **str** | The search feature tier of this engine. Different tiers might have different pricing. To learn more, please check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_engine_search_engine_config import GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig from a JSON string
google_cloud_discoveryengine_v1beta_engine_search_engine_config_instance = GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_engine_search_engine_config_dict = google_cloud_discoveryengine_v1beta_engine_search_engine_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig from a dict
google_cloud_discoveryengine_v1beta_engine_search_engine_config_from_dict = GoogleCloudDiscoveryengineV1betaEngineSearchEngineConfig.from_dict(google_cloud_discoveryengine_v1beta_engine_search_engine_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


