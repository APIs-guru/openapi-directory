# GoogleCloudRecommenderV1ListRecommendationsResponse

Response to the `ListRecommendations` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be used to request the next page of results. This field is empty if there are no additional results. | [optional] 
**recommendations** | [**List[GoogleCloudRecommenderV1Recommendation]**](GoogleCloudRecommenderV1Recommendation.md) | The set of recommendations for the &#x60;parent&#x60; resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_list_recommendations_response import GoogleCloudRecommenderV1ListRecommendationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1ListRecommendationsResponse from a JSON string
google_cloud_recommender_v1_list_recommendations_response_instance = GoogleCloudRecommenderV1ListRecommendationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1ListRecommendationsResponse.to_json())

# convert the object into a dict
google_cloud_recommender_v1_list_recommendations_response_dict = google_cloud_recommender_v1_list_recommendations_response_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1ListRecommendationsResponse from a dict
google_cloud_recommender_v1_list_recommendations_response_from_dict = GoogleCloudRecommenderV1ListRecommendationsResponse.from_dict(google_cloud_recommender_v1_list_recommendations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


