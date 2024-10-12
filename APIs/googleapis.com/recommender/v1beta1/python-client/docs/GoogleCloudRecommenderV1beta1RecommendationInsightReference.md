# GoogleCloudRecommenderV1beta1RecommendationInsightReference

Reference to an associated insight.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insight** | **str** | Insight resource name, e.g. projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/insights/[INSIGHT_ID] | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_recommendation_insight_reference import GoogleCloudRecommenderV1beta1RecommendationInsightReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1RecommendationInsightReference from a JSON string
google_cloud_recommender_v1beta1_recommendation_insight_reference_instance = GoogleCloudRecommenderV1beta1RecommendationInsightReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1RecommendationInsightReference.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_recommendation_insight_reference_dict = google_cloud_recommender_v1beta1_recommendation_insight_reference_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1RecommendationInsightReference from a dict
google_cloud_recommender_v1beta1_recommendation_insight_reference_from_dict = GoogleCloudRecommenderV1beta1RecommendationInsightReference.from_dict(google_cloud_recommender_v1beta1_recommendation_insight_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


