# GoogleCloudRecommenderV1InsightStateInfo

Information related to insight state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | Insight state. | [optional] 
**state_metadata** | **Dict[str, str]** | A map of metadata for the state, provided by user or automations systems. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_insight_state_info import GoogleCloudRecommenderV1InsightStateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1InsightStateInfo from a JSON string
google_cloud_recommender_v1_insight_state_info_instance = GoogleCloudRecommenderV1InsightStateInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1InsightStateInfo.to_json())

# convert the object into a dict
google_cloud_recommender_v1_insight_state_info_dict = google_cloud_recommender_v1_insight_state_info_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1InsightStateInfo from a dict
google_cloud_recommender_v1_insight_state_info_from_dict = GoogleCloudRecommenderV1InsightStateInfo.from_dict(google_cloud_recommender_v1_insight_state_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


