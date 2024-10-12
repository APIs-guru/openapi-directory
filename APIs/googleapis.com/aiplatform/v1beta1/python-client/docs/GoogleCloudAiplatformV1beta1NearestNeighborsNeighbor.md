# GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor

A neighbor of the query vector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | **float** | The distance between the neighbor and the query vector. | [optional] 
**entity_id** | **str** | The id of the similar entity. | [optional] 
**entity_key_values** | [**GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse**](GoogleCloudAiplatformV1beta1FetchFeatureValuesResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nearest_neighbors_neighbor import GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor from a JSON string
google_cloud_aiplatform_v1beta1_nearest_neighbors_neighbor_instance = GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nearest_neighbors_neighbor_dict = google_cloud_aiplatform_v1beta1_nearest_neighbors_neighbor_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor from a dict
google_cloud_aiplatform_v1beta1_nearest_neighbors_neighbor_from_dict = GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor.from_dict(google_cloud_aiplatform_v1beta1_nearest_neighbors_neighbor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


