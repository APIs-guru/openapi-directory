# GoogleCloudDiscoveryengineV1betaRecommendResponse

Response message for Recommend method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_token** | **str** | A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. | [optional] 
**missing_ids** | **List[str]** | IDs of documents in the request that were missing from the default Branch associated with the requested ServingConfig. | [optional] 
**results** | [**List[GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult]**](GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult.md) | A list of recommended Documents. The order represents the ranking (from the most relevant Document to the least). | [optional] 
**validate_only** | **bool** | True if RecommendRequest.validate_only was set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_recommend_response import GoogleCloudDiscoveryengineV1betaRecommendResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaRecommendResponse from a JSON string
google_cloud_discoveryengine_v1beta_recommend_response_instance = GoogleCloudDiscoveryengineV1betaRecommendResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaRecommendResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_recommend_response_dict = google_cloud_discoveryengine_v1beta_recommend_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaRecommendResponse from a dict
google_cloud_discoveryengine_v1beta_recommend_response_from_dict = GoogleCloudDiscoveryengineV1betaRecommendResponse.from_dict(google_cloud_discoveryengine_v1beta_recommend_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


