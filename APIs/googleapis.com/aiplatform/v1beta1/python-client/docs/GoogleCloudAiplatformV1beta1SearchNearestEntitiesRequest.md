# GoogleCloudAiplatformV1beta1SearchNearestEntitiesRequest

The request message for FeatureOnlineStoreService.SearchNearestEntities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**GoogleCloudAiplatformV1beta1NearestNeighborQuery**](GoogleCloudAiplatformV1beta1NearestNeighborQuery.md) |  | [optional] 
**return_full_entity** | **bool** | Optional. If set to true, the full entities (including all vector values and metadata) of the nearest neighbors are returned; otherwise only entity id of the nearest neighbors will be returned. Note that returning full entities will significantly increase the latency and cost of the query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_search_nearest_entities_request import GoogleCloudAiplatformV1beta1SearchNearestEntitiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SearchNearestEntitiesRequest from a JSON string
google_cloud_aiplatform_v1beta1_search_nearest_entities_request_instance = GoogleCloudAiplatformV1beta1SearchNearestEntitiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SearchNearestEntitiesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_search_nearest_entities_request_dict = google_cloud_aiplatform_v1beta1_search_nearest_entities_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SearchNearestEntitiesRequest from a dict
google_cloud_aiplatform_v1beta1_search_nearest_entities_request_from_dict = GoogleCloudAiplatformV1beta1SearchNearestEntitiesRequest.from_dict(google_cloud_aiplatform_v1beta1_search_nearest_entities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


