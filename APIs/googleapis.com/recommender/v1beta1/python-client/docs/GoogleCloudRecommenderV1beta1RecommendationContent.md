# GoogleCloudRecommenderV1beta1RecommendationContent

Contains what resources are changing and how they are changing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_groups** | [**List[GoogleCloudRecommenderV1beta1OperationGroup]**](GoogleCloudRecommenderV1beta1OperationGroup.md) | Operations to one or more Google Cloud resources grouped in such a way that, all operations within one group are expected to be performed atomically and in an order. | [optional] 
**overview** | **Dict[str, object]** | Condensed overview information about the recommendation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_recommendation_content import GoogleCloudRecommenderV1beta1RecommendationContent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1RecommendationContent from a JSON string
google_cloud_recommender_v1beta1_recommendation_content_instance = GoogleCloudRecommenderV1beta1RecommendationContent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1RecommendationContent.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_recommendation_content_dict = google_cloud_recommender_v1beta1_recommendation_content_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1RecommendationContent from a dict
google_cloud_recommender_v1beta1_recommendation_content_from_dict = GoogleCloudRecommenderV1beta1RecommendationContent.from_dict(google_cloud_recommender_v1beta1_recommendation_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


