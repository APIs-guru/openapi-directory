# GoogleCloudRecommenderV1RecommendationStateInfo

Information for state. Contains state and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED. | [optional] 
**state_metadata** | **Dict[str, str]** | A map of metadata for the state, provided by user or automations systems. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_recommendation_state_info import GoogleCloudRecommenderV1RecommendationStateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1RecommendationStateInfo from a JSON string
google_cloud_recommender_v1_recommendation_state_info_instance = GoogleCloudRecommenderV1RecommendationStateInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1RecommendationStateInfo.to_json())

# convert the object into a dict
google_cloud_recommender_v1_recommendation_state_info_dict = google_cloud_recommender_v1_recommendation_state_info_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1RecommendationStateInfo from a dict
google_cloud_recommender_v1_recommendation_state_info_from_dict = GoogleCloudRecommenderV1RecommendationStateInfo.from_dict(google_cloud_recommender_v1_recommendation_state_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


