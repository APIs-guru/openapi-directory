# GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig

Specifies the configurations needed for Generic Discovery.Currently we support: * `content_search_spec`: configuration for generic content search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_search_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_serving_config_generic_config import GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig from a JSON string
google_cloud_discoveryengine_v1alpha_serving_config_generic_config_instance = GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_serving_config_generic_config_dict = google_cloud_discoveryengine_v1alpha_serving_config_generic_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig from a dict
google_cloud_discoveryengine_v1alpha_serving_config_generic_config_from_dict = GoogleCloudDiscoveryengineV1alphaServingConfigGenericConfig.from_dict(google_cloud_discoveryengine_v1alpha_serving_config_generic_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


