# GoogleCloudApigeeV1ScoreComponentRecommendationAction

Action to improve security score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_context** | [**GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext**](GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext.md) |  | [optional] 
**description** | **str** | Description of the action. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_score_component_recommendation_action import GoogleCloudApigeeV1ScoreComponentRecommendationAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ScoreComponentRecommendationAction from a JSON string
google_cloud_apigee_v1_score_component_recommendation_action_instance = GoogleCloudApigeeV1ScoreComponentRecommendationAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ScoreComponentRecommendationAction.to_json())

# convert the object into a dict
google_cloud_apigee_v1_score_component_recommendation_action_dict = google_cloud_apigee_v1_score_component_recommendation_action_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ScoreComponentRecommendationAction from a dict
google_cloud_apigee_v1_score_component_recommendation_action_from_dict = GoogleCloudApigeeV1ScoreComponentRecommendationAction.from_dict(google_cloud_apigee_v1_score_component_recommendation_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


