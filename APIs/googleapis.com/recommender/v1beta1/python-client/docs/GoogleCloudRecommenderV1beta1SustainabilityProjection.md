# GoogleCloudRecommenderV1beta1SustainabilityProjection

Contains metadata about how much sustainability a recommendation can save or incur.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration for which this sustanability applies. | [optional] 
**kg_co2e** | **float** | Carbon Footprint generated in kg of CO2 equivalent. Chose kg_c_o2e so that the name renders correctly in camelCase (kgCO2e). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommender_v1beta1_sustainability_projection import GoogleCloudRecommenderV1beta1SustainabilityProjection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommenderV1beta1SustainabilityProjection from a JSON string
google_cloud_recommender_v1beta1_sustainability_projection_instance = GoogleCloudRecommenderV1beta1SustainabilityProjection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommenderV1beta1SustainabilityProjection.to_json())

# convert the object into a dict
google_cloud_recommender_v1beta1_sustainability_projection_dict = google_cloud_recommender_v1beta1_sustainability_projection_instance.to_dict()
# create an instance of GoogleCloudRecommenderV1beta1SustainabilityProjection from a dict
google_cloud_recommender_v1beta1_sustainability_projection_from_dict = GoogleCloudRecommenderV1beta1SustainabilityProjection.from_dict(google_cloud_recommender_v1beta1_sustainability_projection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


