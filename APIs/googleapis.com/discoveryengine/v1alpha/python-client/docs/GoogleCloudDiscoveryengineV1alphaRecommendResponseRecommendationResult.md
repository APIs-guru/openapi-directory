# GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult

RecommendationResult represents a generic recommendation result with associated metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**GoogleCloudDiscoveryengineV1alphaDocument**](GoogleCloudDiscoveryengineV1alphaDocument.md) |  | [optional] 
**id** | **str** | Resource ID of the recommended Document. | [optional] 
**metadata** | **Dict[str, object]** | Additional Document metadata / annotations. Possible values: * &#x60;score&#x60;: Recommendation score in double value. Is set if &#x60;returnScore&#x60; is set to true in RecommendRequest.params. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_recommend_response_recommendation_result import GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult from a JSON string
google_cloud_discoveryengine_v1alpha_recommend_response_recommendation_result_instance = GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_recommend_response_recommendation_result_dict = google_cloud_discoveryengine_v1alpha_recommend_response_recommendation_result_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult from a dict
google_cloud_discoveryengine_v1alpha_recommend_response_recommendation_result_from_dict = GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult.from_dict(google_cloud_discoveryengine_v1alpha_recommend_response_recommendation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


