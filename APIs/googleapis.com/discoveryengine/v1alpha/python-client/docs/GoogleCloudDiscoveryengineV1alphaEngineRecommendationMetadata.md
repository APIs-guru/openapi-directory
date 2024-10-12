# GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata

Additional information of a recommendation engine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_state** | **str** | Output only. The state of data requirements for this engine: &#x60;DATA_OK&#x60; and &#x60;DATA_ERROR&#x60;. Engine cannot be trained if the data is in &#x60;DATA_ERROR&#x60; state. Engine can have &#x60;DATA_ERROR&#x60; state even if serving state is &#x60;ACTIVE&#x60;: engines were trained successfully before, but cannot be refreshed because the underlying engine no longer has sufficient data for training. | [optional] [readonly] 
**last_tune_time** | **str** | Output only. The timestamp when the latest successful tune finished. Only applicable on Media Recommendation engines. | [optional] [readonly] 
**serving_state** | **str** | Output only. The serving state of the engine: &#x60;ACTIVE&#x60;, &#x60;NOT_ACTIVE&#x60;. | [optional] [readonly] 
**tuning_operation** | **str** | Output only. The latest tune operation id associated with the engine. Only applicable on Media Recommendation engines. If present, this operation id can be used to determine if there is an ongoing tune for this engine. To check the operation status, send the GetOperation request with this operation id in the engine resource format. If no tuning has happened for this engine, the string is empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_engine_recommendation_metadata import GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata from a JSON string
google_cloud_discoveryengine_v1alpha_engine_recommendation_metadata_instance = GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_engine_recommendation_metadata_dict = google_cloud_discoveryengine_v1alpha_engine_recommendation_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata from a dict
google_cloud_discoveryengine_v1alpha_engine_recommendation_metadata_from_dict = GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata.from_dict(google_cloud_discoveryengine_v1alpha_engine_recommendation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


