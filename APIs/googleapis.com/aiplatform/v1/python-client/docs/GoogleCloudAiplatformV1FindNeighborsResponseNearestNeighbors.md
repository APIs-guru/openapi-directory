# GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors

Nearest neighbors for one query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the query datapoint. | [optional] 
**neighbors** | [**List[GoogleCloudAiplatformV1FindNeighborsResponseNeighbor]**](GoogleCloudAiplatformV1FindNeighborsResponseNeighbor.md) | All its neighbors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_find_neighbors_response_nearest_neighbors import GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors from a JSON string
google_cloud_aiplatform_v1_find_neighbors_response_nearest_neighbors_instance = GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_find_neighbors_response_nearest_neighbors_dict = google_cloud_aiplatform_v1_find_neighbors_response_nearest_neighbors_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors from a dict
google_cloud_aiplatform_v1_find_neighbors_response_nearest_neighbors_from_dict = GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors.from_dict(google_cloud_aiplatform_v1_find_neighbors_response_nearest_neighbors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


