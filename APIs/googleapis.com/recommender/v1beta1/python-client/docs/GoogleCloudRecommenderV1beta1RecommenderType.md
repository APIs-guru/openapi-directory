# GoogleCloudRecommenderV1beta1RecommenderType

The type of a recommender.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The recommender&#39;s name in format RecommenderTypes/{recommender_type} eg: recommenderTypes/google.iam.policy.Recommender | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_recommender_type import GoogleCloudRecommenderV1beta1RecommenderType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1RecommenderType from a JSON string
google_cloud_recommender_v1beta1_recommender_type_instance = GoogleCloudRecommenderV1beta1RecommenderType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1RecommenderType.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_recommender_type_dict = google_cloud_recommender_v1beta1_recommender_type_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1RecommenderType from a dict
google_cloud_recommender_v1beta1_recommender_type_from_dict = GoogleCloudRecommenderV1beta1RecommenderType.from_dict(google_cloud_recommender_v1beta1_recommender_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


