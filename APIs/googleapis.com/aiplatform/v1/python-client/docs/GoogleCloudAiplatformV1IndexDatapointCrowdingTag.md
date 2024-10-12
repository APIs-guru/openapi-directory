# GoogleCloudAiplatformV1IndexDatapointCrowdingTag

Crowding tag is a constraint on a neighbor list produced by nearest neighbor search requiring that no more than some value k' of the k neighbors returned have the same value of crowding_attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crowding_attribute** | **str** | The attribute value used for crowding. The maximum number of neighbors to return per crowding attribute value (per_crowding_attribute_num_neighbors) is configured per-query. This field is ignored if per_crowding_attribute_num_neighbors is larger than the total number of neighbors to return for a given query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_index_datapoint_crowding_tag import GoogleCloudAiplatformV1IndexDatapointCrowdingTag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1IndexDatapointCrowdingTag from a JSON string
google_cloud_aiplatform_v1_index_datapoint_crowding_tag_instance = GoogleCloudAiplatformV1IndexDatapointCrowdingTag.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1IndexDatapointCrowdingTag.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_index_datapoint_crowding_tag_dict = google_cloud_aiplatform_v1_index_datapoint_crowding_tag_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1IndexDatapointCrowdingTag from a dict
google_cloud_aiplatform_v1_index_datapoint_crowding_tag_from_dict = GoogleCloudAiplatformV1IndexDatapointCrowdingTag.from_dict(google_cloud_aiplatform_v1_index_datapoint_crowding_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


