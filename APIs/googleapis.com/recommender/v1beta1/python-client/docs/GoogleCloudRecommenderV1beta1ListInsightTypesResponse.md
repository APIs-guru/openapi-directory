# GoogleCloudRecommenderV1beta1ListInsightTypesResponse

Response for the `ListInsightTypes` method. Next ID: 3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insight_types** | [**List[GoogleCloudRecommenderV1beta1InsightType]**](GoogleCloudRecommenderV1beta1InsightType.md) | The set of recommenders available | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_list_insight_types_response import GoogleCloudRecommenderV1beta1ListInsightTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1ListInsightTypesResponse from a JSON string
google_cloud_recommender_v1beta1_list_insight_types_response_instance = GoogleCloudRecommenderV1beta1ListInsightTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1ListInsightTypesResponse.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_list_insight_types_response_dict = google_cloud_recommender_v1beta1_list_insight_types_response_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1ListInsightTypesResponse from a dict
google_cloud_recommender_v1beta1_list_insight_types_response_from_dict = GoogleCloudRecommenderV1beta1ListInsightTypesResponse.from_dict(google_cloud_recommender_v1beta1_list_insight_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


