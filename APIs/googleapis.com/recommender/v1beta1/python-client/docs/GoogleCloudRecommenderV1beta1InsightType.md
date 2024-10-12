# GoogleCloudRecommenderV1beta1InsightType

The type of insight.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The insight_type&#39;s name in format insightTypes/{insight_type} eg: insightTypes/google.iam.policy.Insight | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_insight_type import GoogleCloudRecommenderV1beta1InsightType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1InsightType from a JSON string
google_cloud_recommender_v1beta1_insight_type_instance = GoogleCloudRecommenderV1beta1InsightType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1InsightType.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_insight_type_dict = google_cloud_recommender_v1beta1_insight_type_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1InsightType from a dict
google_cloud_recommender_v1beta1_insight_type_from_dict = GoogleCloudRecommenderV1beta1InsightType.from_dict(google_cloud_recommender_v1beta1_insight_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


