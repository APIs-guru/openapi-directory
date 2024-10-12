# GoogleCloudAiplatformV1FindNeighborsResponse

The response message for MatchService.FindNeighbors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nearest_neighbors** | [**List[GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors]**](GoogleCloudAiplatformV1FindNeighborsResponseNearestNeighbors.md) | The nearest neighbors of the query datapoints. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_find_neighbors_response import GoogleCloudAiplatformV1FindNeighborsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FindNeighborsResponse from a JSON string
google_cloud_aiplatform_v1_find_neighbors_response_instance = GoogleCloudAiplatformV1FindNeighborsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FindNeighborsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_find_neighbors_response_dict = google_cloud_aiplatform_v1_find_neighbors_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FindNeighborsResponse from a dict
google_cloud_aiplatform_v1_find_neighbors_response_from_dict = GoogleCloudAiplatformV1FindNeighborsResponse.from_dict(google_cloud_aiplatform_v1_find_neighbors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


