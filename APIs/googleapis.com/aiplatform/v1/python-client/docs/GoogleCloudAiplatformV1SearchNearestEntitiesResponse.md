# GoogleCloudAiplatformV1SearchNearestEntitiesResponse

Response message for FeatureOnlineStoreService.SearchNearestEntities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nearest_neighbors** | [**GoogleCloudAiplatformV1NearestNeighbors**](GoogleCloudAiplatformV1NearestNeighbors.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_search_nearest_entities_response import GoogleCloudAiplatformV1SearchNearestEntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SearchNearestEntitiesResponse from a JSON string
google_cloud_aiplatform_v1_search_nearest_entities_response_instance = GoogleCloudAiplatformV1SearchNearestEntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SearchNearestEntitiesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_search_nearest_entities_response_dict = google_cloud_aiplatform_v1_search_nearest_entities_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SearchNearestEntitiesResponse from a dict
google_cloud_aiplatform_v1_search_nearest_entities_response_from_dict = GoogleCloudAiplatformV1SearchNearestEntitiesResponse.from_dict(google_cloud_aiplatform_v1_search_nearest_entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


