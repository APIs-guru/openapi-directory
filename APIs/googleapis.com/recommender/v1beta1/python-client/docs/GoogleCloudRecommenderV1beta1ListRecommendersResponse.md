# GoogleCloudRecommenderV1beta1ListRecommendersResponse

Response for the `ListRecommender` method. Next ID: 3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**recommenders** | [**List[GoogleCloudRecommenderV1beta1RecommenderType]**](GoogleCloudRecommenderV1beta1RecommenderType.md) | The set of recommenders available | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_list_recommenders_response import GoogleCloudRecommenderV1beta1ListRecommendersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1ListRecommendersResponse from a JSON string
google_cloud_recommender_v1beta1_list_recommenders_response_instance = GoogleCloudRecommenderV1beta1ListRecommendersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1ListRecommendersResponse.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_list_recommenders_response_dict = google_cloud_recommender_v1beta1_list_recommenders_response_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1ListRecommendersResponse from a dict
google_cloud_recommender_v1beta1_list_recommenders_response_from_dict = GoogleCloudRecommenderV1beta1ListRecommendersResponse.from_dict(google_cloud_recommender_v1beta1_list_recommenders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


