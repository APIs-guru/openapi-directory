# GoogleCloudAiplatformV1NearestNeighborQuery

A query to find a number of similar entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedding** | [**GoogleCloudAiplatformV1NearestNeighborQueryEmbedding**](GoogleCloudAiplatformV1NearestNeighborQueryEmbedding.md) |  | [optional] 
**entity_id** | **str** | Optional. The entity id whose similar entities should be searched for. If embedding is set, search will use embedding instead of entity_id. | [optional] 
**neighbor_count** | **int** | Optional. The number of similar entities to be retrieved from feature view for each query. | [optional] 
**parameters** | [**GoogleCloudAiplatformV1NearestNeighborQueryParameters**](GoogleCloudAiplatformV1NearestNeighborQueryParameters.md) |  | [optional] 
**per_crowding_attribute_neighbor_count** | **int** | Optional. Crowding is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than sper_crowding_attribute_neighbor_count of the k neighbors returned have the same value of crowding_attribute. It&#39;s used for improving result diversity. | [optional] 
**string_filters** | [**List[GoogleCloudAiplatformV1NearestNeighborQueryStringFilter]**](GoogleCloudAiplatformV1NearestNeighborQueryStringFilter.md) | Optional. The list of string filters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_nearest_neighbor_query import GoogleCloudAiplatformV1NearestNeighborQuery

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NearestNeighborQuery from a JSON string
google_cloud_aiplatform_v1_nearest_neighbor_query_instance = GoogleCloudAiplatformV1NearestNeighborQuery.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NearestNeighborQuery.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_nearest_neighbor_query_dict = google_cloud_aiplatform_v1_nearest_neighbor_query_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NearestNeighborQuery from a dict
google_cloud_aiplatform_v1_nearest_neighbor_query_from_dict = GoogleCloudAiplatformV1NearestNeighborQuery.from_dict(google_cloud_aiplatform_v1_nearest_neighbor_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


