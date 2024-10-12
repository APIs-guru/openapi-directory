# GoogleCloudAiplatformV1beta1NearestNeighbors

Nearest neighbors for one query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**neighbors** | [**List[GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor]**](GoogleCloudAiplatformV1beta1NearestNeighborsNeighbor.md) | All its neighbors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_nearest_neighbors import GoogleCloudAiplatformV1beta1NearestNeighbors

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NearestNeighbors from a JSON string
google_cloud_aiplatform_v1beta1_nearest_neighbors_instance = GoogleCloudAiplatformV1beta1NearestNeighbors.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NearestNeighbors.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_nearest_neighbors_dict = google_cloud_aiplatform_v1beta1_nearest_neighbors_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NearestNeighbors from a dict
google_cloud_aiplatform_v1beta1_nearest_neighbors_from_dict = GoogleCloudAiplatformV1beta1NearestNeighbors.from_dict(google_cloud_aiplatform_v1beta1_nearest_neighbors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


