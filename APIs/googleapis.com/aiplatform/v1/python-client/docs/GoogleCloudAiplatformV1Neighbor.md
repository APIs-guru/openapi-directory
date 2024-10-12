# GoogleCloudAiplatformV1Neighbor

Neighbors for example-based explanations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**neighbor_distance** | **float** | Output only. The neighbor distance. | [optional] [readonly] 
**neighbor_id** | **str** | Output only. The neighbor id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_neighbor import GoogleCloudAiplatformV1Neighbor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1Neighbor from a JSON string
google_cloud_aiplatform_v1_neighbor_instance = GoogleCloudAiplatformV1Neighbor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1Neighbor.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_neighbor_dict = google_cloud_aiplatform_v1_neighbor_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1Neighbor from a dict
google_cloud_aiplatform_v1_neighbor_from_dict = GoogleCloudAiplatformV1Neighbor.from_dict(google_cloud_aiplatform_v1_neighbor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


