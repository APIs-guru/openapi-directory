# GoogleCloudRecommenderV1ReliabilityProjection

Contains information on the impact of a reliability recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **Dict[str, object]** | Per-recommender projection. | [optional] 
**risks** | **List[str]** | Reliability risks mitigated by this recommendation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_reliability_projection import GoogleCloudRecommenderV1ReliabilityProjection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1ReliabilityProjection from a JSON string
google_cloud_recommender_v1_reliability_projection_instance = GoogleCloudRecommenderV1ReliabilityProjection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1ReliabilityProjection.to_json())

# convert the object into a dict
google_cloud_recommender_v1_reliability_projection_dict = google_cloud_recommender_v1_reliability_projection_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1ReliabilityProjection from a dict
google_cloud_recommender_v1_reliability_projection_from_dict = GoogleCloudRecommenderV1ReliabilityProjection.from_dict(google_cloud_recommender_v1_reliability_projection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


