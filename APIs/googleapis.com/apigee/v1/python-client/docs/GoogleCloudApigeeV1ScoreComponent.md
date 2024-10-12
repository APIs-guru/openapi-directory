# GoogleCloudApigeeV1ScoreComponent

Component is an individual security element that is scored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculate_time** | **str** | Time when score was calculated. | [optional] 
**data_capture_time** | **str** | Time in the requested time period when data was last captured to compute the score. | [optional] 
**drilldown_paths** | **List[str]** | List of paths for next components. | [optional] 
**recommendations** | [**List[GoogleCloudApigeeV1ScoreComponentRecommendation]**](GoogleCloudApigeeV1ScoreComponentRecommendation.md) | List of recommendations to improve API security. | [optional] 
**score** | **int** | Score for the component. | [optional] 
**score_path** | **str** | Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_score_component import GoogleCloudApigeeV1ScoreComponent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ScoreComponent from a JSON string
google_cloud_apigee_v1_score_component_instance = GoogleCloudApigeeV1ScoreComponent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ScoreComponent.to_json())

# convert the object into a dict
google_cloud_apigee_v1_score_component_dict = google_cloud_apigee_v1_score_component_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ScoreComponent from a dict
google_cloud_apigee_v1_score_component_from_dict = GoogleCloudApigeeV1ScoreComponent.from_dict(google_cloud_apigee_v1_score_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


