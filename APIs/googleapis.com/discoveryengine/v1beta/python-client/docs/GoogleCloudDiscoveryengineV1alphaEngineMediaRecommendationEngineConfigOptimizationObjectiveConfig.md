# GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig

Custom threshold for `cvr` optimization_objective.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_field** | **str** | Required. The name of the field to target. Currently supported values: &#x60;watch-percentage&#x60;, &#x60;watch-time&#x60;. | [optional] 
**target_field_value_float** | **float** | Required. The threshold to be applied to the target (e.g., 0.5). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_optimization_objective_config import GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig from a JSON string
google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_optimization_objective_config_instance = GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_optimization_objective_config_dict = google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_optimization_objective_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig from a dict
google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_optimization_objective_config_from_dict = GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.from_dict(google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_optimization_objective_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


