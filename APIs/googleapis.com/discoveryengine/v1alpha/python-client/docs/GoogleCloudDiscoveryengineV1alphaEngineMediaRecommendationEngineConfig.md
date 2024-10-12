# GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig

Additional config specs for a Media Recommendation engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optimization_objective** | **str** | The optimization objective. e.g., &#x60;cvr&#x60;. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: &#x60;ctr&#x60;, &#x60;cvr&#x60;. If not specified, we choose default based on engine type. Default depends on type of recommendation: &#x60;recommended-for-you&#x60; &#x3D;&gt; &#x60;ctr&#x60; &#x60;others-you-may-like&#x60; &#x3D;&gt; &#x60;ctr&#x60; | [optional] 
**optimization_objective_config** | [**GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig**](GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.md) |  | [optional] 
**training_state** | **str** | The training state that the engine is in (e.g. &#x60;TRAINING&#x60; or &#x60;PAUSED&#x60;). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for &#x60;CreateEngine&#x60; method is &#x60;TRAINING&#x60;. The default value for &#x60;UpdateEngine&#x60; method is to keep the state the same as before. | [optional] 
**type** | **str** | Required. The type of engine. e.g., &#x60;recommended-for-you&#x60;. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: &#x60;recommended-for-you&#x60;, &#x60;others-you-may-like&#x60;, &#x60;more-like-this&#x60;, &#x60;most-popular-items&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config import GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig from a JSON string
google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_instance = GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_dict = google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig from a dict
google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_from_dict = GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig.from_dict(google_cloud_discoveryengine_v1alpha_engine_media_recommendation_engine_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


