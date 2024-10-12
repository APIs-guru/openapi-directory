# GoogleCloudRecommenderV1beta1Recommendation

A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_impact** | [**List[GoogleCloudRecommenderV1beta1Impact]**](GoogleCloudRecommenderV1beta1Impact.md) | Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative. | [optional] 
**associated_insights** | [**List[GoogleCloudRecommenderV1beta1RecommendationInsightReference]**](GoogleCloudRecommenderV1beta1RecommendationInsightReference.md) | Insights that led to this recommendation. | [optional] 
**content** | [**GoogleCloudRecommenderV1beta1RecommendationContent**](GoogleCloudRecommenderV1beta1RecommendationContent.md) |  | [optional] 
**description** | **str** | Free-form human readable summary in English. The maximum length is 500 characters. | [optional] 
**etag** | **str** | Fingerprint of the Recommendation. Provides optimistic locking when updating states. | [optional] 
**last_refresh_time** | **str** | Last time this recommendation was refreshed by the system that created it in the first place. | [optional] 
**name** | **str** | Name of recommendation. | [optional] 
**primary_impact** | [**GoogleCloudRecommenderV1beta1Impact**](GoogleCloudRecommenderV1beta1Impact.md) |  | [optional] 
**priority** | **str** | Recommendation&#39;s priority. | [optional] 
**recommender_subtype** | **str** | Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to &#x60;content&#x60; or &#x60;primary_impact.category&#x60; are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender &#x3D; \&quot;google.iam.policy.Recommender\&quot;, recommender_subtype can be one of \&quot;REMOVE_ROLE\&quot;/\&quot;REPLACE_ROLE\&quot; | [optional] 
**state_info** | [**GoogleCloudRecommenderV1beta1RecommendationStateInfo**](GoogleCloudRecommenderV1beta1RecommendationStateInfo.md) |  | [optional] 
**target_resources** | **List[str]** | Fully qualified resource names that this recommendation is targeting. | [optional] 
**xor_group_id** | **str** | Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_recommendation import GoogleCloudRecommenderV1beta1Recommendation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1Recommendation from a JSON string
google_cloud_recommender_v1beta1_recommendation_instance = GoogleCloudRecommenderV1beta1Recommendation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1Recommendation.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_recommendation_dict = google_cloud_recommender_v1beta1_recommendation_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1Recommendation from a dict
google_cloud_recommender_v1beta1_recommendation_from_dict = GoogleCloudRecommenderV1beta1Recommendation.from_dict(google_cloud_recommender_v1beta1_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


