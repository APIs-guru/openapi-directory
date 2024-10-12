# GoogleCloudDiscoveryengineV1alphaEngineCommonConfig

Common configurations for an Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | Immutable. The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_engine_common_config import GoogleCloudDiscoveryengineV1alphaEngineCommonConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineCommonConfig from a JSON string
google_cloud_discoveryengine_v1alpha_engine_common_config_instance = GoogleCloudDiscoveryengineV1alphaEngineCommonConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEngineCommonConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_engine_common_config_dict = google_cloud_discoveryengine_v1alpha_engine_common_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineCommonConfig from a dict
google_cloud_discoveryengine_v1alpha_engine_common_config_from_dict = GoogleCloudDiscoveryengineV1alphaEngineCommonConfig.from_dict(google_cloud_discoveryengine_v1alpha_engine_common_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


