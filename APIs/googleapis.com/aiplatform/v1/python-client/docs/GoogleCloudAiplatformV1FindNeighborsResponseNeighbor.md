# GoogleCloudAiplatformV1FindNeighborsResponseNeighbor

A neighbor of the query vector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datapoint** | [**GoogleCloudAiplatformV1IndexDatapoint**](GoogleCloudAiplatformV1IndexDatapoint.md) |  | [optional] 
**distance** | **float** | The distance between the neighbor and the query vector. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_find_neighbors_response_neighbor import GoogleCloudAiplatformV1FindNeighborsResponseNeighbor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FindNeighborsResponseNeighbor from a JSON string
google_cloud_aiplatform_v1_find_neighbors_response_neighbor_instance = GoogleCloudAiplatformV1FindNeighborsResponseNeighbor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FindNeighborsResponseNeighbor.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_find_neighbors_response_neighbor_dict = google_cloud_aiplatform_v1_find_neighbors_response_neighbor_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FindNeighborsResponseNeighbor from a dict
google_cloud_aiplatform_v1_find_neighbors_response_neighbor_from_dict = GoogleCloudAiplatformV1FindNeighborsResponseNeighbor.from_dict(google_cloud_aiplatform_v1_find_neighbors_response_neighbor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


