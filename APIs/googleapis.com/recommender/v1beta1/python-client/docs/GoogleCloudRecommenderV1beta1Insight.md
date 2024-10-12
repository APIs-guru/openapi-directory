# GoogleCloudRecommenderV1beta1Insight

An insight along with the information used to derive the insight. The insight may have associated recommendations as well.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associated_recommendations** | [**List[GoogleCloudRecommenderV1beta1InsightRecommendationReference]**](GoogleCloudRecommenderV1beta1InsightRecommendationReference.md) | Recommendations derived from this insight. | [optional] 
**category** | **str** | Category being targeted by the insight. | [optional] 
**content** | **Dict[str, object]** | A struct of custom fields to explain the insight. Example: \&quot;grantedPermissionsCount\&quot;: \&quot;1000\&quot; | [optional] 
**description** | **str** | Free-form human readable summary in English. The maximum length is 500 characters. | [optional] 
**etag** | **str** | Fingerprint of the Insight. Provides optimistic locking when updating states. | [optional] 
**insight_subtype** | **str** | Insight subtype. Insight content schema will be stable for a given subtype. | [optional] 
**last_refresh_time** | **str** | Timestamp of the latest data used to generate the insight. | [optional] 
**name** | **str** | Name of the insight. | [optional] 
**observation_period** | **str** | Observation period that led to the insight. The source data used to generate the insight ends at last_refresh_time and begins at (last_refresh_time - observation_period). | [optional] 
**severity** | **str** | Insight&#39;s severity. | [optional] 
**state_info** | [**GoogleCloudRecommenderV1beta1InsightStateInfo**](GoogleCloudRecommenderV1beta1InsightStateInfo.md) |  | [optional] 
**target_resources** | **List[str]** | Fully qualified resource names that this insight is targeting. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_insight import GoogleCloudRecommenderV1beta1Insight

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1Insight from a JSON string
google_cloud_recommender_v1beta1_insight_instance = GoogleCloudRecommenderV1beta1Insight.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1Insight.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_insight_dict = google_cloud_recommender_v1beta1_insight_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1Insight from a dict
google_cloud_recommender_v1beta1_insight_from_dict = GoogleCloudRecommenderV1beta1Insight.from_dict(google_cloud_recommender_v1beta1_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


