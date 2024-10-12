# GoogleCloudRecommenderV1Impact

Contains the impact a recommendation can have for a given category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category that is being targeted. | [optional] 
**cost_projection** | [**GoogleCloudRecommenderV1CostProjection**](GoogleCloudRecommenderV1CostProjection.md) |  | [optional] 
**reliability_projection** | [**GoogleCloudRecommenderV1ReliabilityProjection**](GoogleCloudRecommenderV1ReliabilityProjection.md) |  | [optional] 
**security_projection** | [**GoogleCloudRecommenderV1SecurityProjection**](GoogleCloudRecommenderV1SecurityProjection.md) |  | [optional] 
**sustainability_projection** | [**GoogleCloudRecommenderV1SustainabilityProjection**](GoogleCloudRecommenderV1SustainabilityProjection.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1_impact import GoogleCloudRecommenderV1Impact

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1Impact from a JSON string
google_cloud_recommender_v1_impact_instance = GoogleCloudRecommenderV1Impact.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1Impact.to_json())

# convert the object into a dict
google_cloud_recommender_v1_impact_dict = google_cloud_recommender_v1_impact_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1Impact from a dict
google_cloud_recommender_v1_impact_from_dict = GoogleCloudRecommenderV1Impact.from_dict(google_cloud_recommender_v1_impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


