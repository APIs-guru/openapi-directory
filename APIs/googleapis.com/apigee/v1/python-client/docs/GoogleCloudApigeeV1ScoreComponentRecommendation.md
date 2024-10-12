# GoogleCloudApigeeV1ScoreComponentRecommendation

Recommendation based on security concerns and score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[GoogleCloudApigeeV1ScoreComponentRecommendationAction]**](GoogleCloudApigeeV1ScoreComponentRecommendationAction.md) | Actions for the recommendation to improve the security score. | [optional] 
**description** | **str** | Description of the recommendation. | [optional] 
**impact** | **int** | Potential impact of this recommendation on the overall score. This denotes how important this recommendation is to improve the score. | [optional] 
**title** | **str** | Title represents recommendation title. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_score_component_recommendation import GoogleCloudApigeeV1ScoreComponentRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ScoreComponentRecommendation from a JSON string
google_cloud_apigee_v1_score_component_recommendation_instance = GoogleCloudApigeeV1ScoreComponentRecommendation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ScoreComponentRecommendation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_score_component_recommendation_dict = google_cloud_apigee_v1_score_component_recommendation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ScoreComponentRecommendation from a dict
google_cloud_apigee_v1_score_component_recommendation_from_dict = GoogleCloudApigeeV1ScoreComponentRecommendation.from_dict(google_cloud_apigee_v1_score_component_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


