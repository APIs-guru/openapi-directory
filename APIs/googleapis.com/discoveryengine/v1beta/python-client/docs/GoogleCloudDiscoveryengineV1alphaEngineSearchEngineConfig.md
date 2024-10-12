# GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig

Configurations for a Search Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_add_ons** | **List[str]** | The add-on that this search engine enables. | [optional] 
**search_tier** | **str** | The search feature tier of this engine. Different tiers might have different pricing. To learn more, please check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_engine_search_engine_config import GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig from a JSON string
google_cloud_discoveryengine_v1alpha_engine_search_engine_config_instance = GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_engine_search_engine_config_dict = google_cloud_discoveryengine_v1alpha_engine_search_engine_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig from a dict
google_cloud_discoveryengine_v1alpha_engine_search_engine_config_from_dict = GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig.from_dict(google_cloud_discoveryengine_v1alpha_engine_search_engine_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


