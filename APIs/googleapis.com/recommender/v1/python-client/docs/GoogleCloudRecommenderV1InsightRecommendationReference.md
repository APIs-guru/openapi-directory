# GoogleCloudRecommenderV1InsightRecommendationReference

Reference to an associated recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendation** | **str** | Recommendation resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/recommendations/[RECOMMENDATION_ID] | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_insight_recommendation_reference import GoogleCloudRecommenderV1InsightRecommendationReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1InsightRecommendationReference from a JSON string
google_cloud_recommender_v1_insight_recommendation_reference_instance = GoogleCloudRecommenderV1InsightRecommendationReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1InsightRecommendationReference.to_json())

# convert the object into a dict
google_cloud_recommender_v1_insight_recommendation_reference_dict = google_cloud_recommender_v1_insight_recommendation_reference_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1InsightRecommendationReference from a dict
google_cloud_recommender_v1_insight_recommendation_reference_from_dict = GoogleCloudRecommenderV1InsightRecommendationReference.from_dict(google_cloud_recommender_v1_insight_recommendation_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


