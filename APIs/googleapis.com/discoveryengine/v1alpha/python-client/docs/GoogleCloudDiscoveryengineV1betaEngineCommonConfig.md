# GoogleCloudDiscoveryengineV1betaEngineCommonConfig

Common configurations for an Engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | Immutable. The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_engine_common_config import GoogleCloudDiscoveryengineV1betaEngineCommonConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaEngineCommonConfig from a JSON string
google_cloud_discoveryengine_v1beta_engine_common_config_instance = GoogleCloudDiscoveryengineV1betaEngineCommonConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaEngineCommonConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_engine_common_config_dict = google_cloud_discoveryengine_v1beta_engine_common_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaEngineCommonConfig from a dict
google_cloud_discoveryengine_v1beta_engine_common_config_from_dict = GoogleCloudDiscoveryengineV1betaEngineCommonConfig.from_dict(google_cloud_discoveryengine_v1beta_engine_common_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


