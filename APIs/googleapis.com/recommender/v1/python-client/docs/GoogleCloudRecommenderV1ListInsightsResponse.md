# GoogleCloudRecommenderV1ListInsightsResponse

Response to the `ListInsights` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insights** | [**List[GoogleCloudRecommenderV1Insight]**](GoogleCloudRecommenderV1Insight.md) | The set of insights for the &#x60;parent&#x60; resource. | [optional] 
**next_page_token** | **str** | A token that can be used to request the next page of results. This field is empty if there are no additional results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_list_insights_response import GoogleCloudRecommenderV1ListInsightsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1ListInsightsResponse from a JSON string
google_cloud_recommender_v1_list_insights_response_instance = GoogleCloudRecommenderV1ListInsightsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1ListInsightsResponse.to_json())

# convert the object into a dict
google_cloud_recommender_v1_list_insights_response_dict = google_cloud_recommender_v1_list_insights_response_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1ListInsightsResponse from a dict
google_cloud_recommender_v1_list_insights_response_from_dict = GoogleCloudRecommenderV1ListInsightsResponse.from_dict(google_cloud_recommender_v1_list_insights_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


