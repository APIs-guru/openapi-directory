# GoogleCloudAiplatformV1beta1NearestNeighborQueryParameters

Parameters that can be overrided in each query to tune query latency and recall.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approximate_neighbor_candidates** | **int** | Optional. The number of neighbors to find via approximate search before exact reordering is performed; if set, this value must be &gt; neighbor_count. | [optional] 
**leaf_nodes_search_fraction** | **float** | Optional. The fraction of the number of leaves to search, set at query time allows user to tune search performance. This value increase result in both search accuracy and latency increase. The value should be between 0.0 and 1.0. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nearest_neighbor_query_parameters import GoogleCloudAiplatformV1beta1NearestNeighborQueryParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NearestNeighborQueryParameters from a JSON string
google_cloud_aiplatform_v1beta1_nearest_neighbor_query_parameters_instance = GoogleCloudAiplatformV1beta1NearestNeighborQueryParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NearestNeighborQueryParameters.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nearest_neighbor_query_parameters_dict = google_cloud_aiplatform_v1beta1_nearest_neighbor_query_parameters_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NearestNeighborQueryParameters from a dict
google_cloud_aiplatform_v1beta1_nearest_neighbor_query_parameters_from_dict = GoogleCloudAiplatformV1beta1NearestNeighborQueryParameters.from_dict(google_cloud_aiplatform_v1beta1_nearest_neighbor_query_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


