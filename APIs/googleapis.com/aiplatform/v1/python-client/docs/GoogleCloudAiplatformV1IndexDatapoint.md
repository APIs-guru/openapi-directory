# GoogleCloudAiplatformV1IndexDatapoint

A datapoint of Index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crowding_tag** | [**GoogleCloudAiplatformV1IndexDatapointCrowdingTag**](GoogleCloudAiplatformV1IndexDatapointCrowdingTag.md) |  | [optional] 
**datapoint_id** | **str** | Required. Unique identifier of the datapoint. | [optional] 
**feature_vector** | **List[float]** | Required. Feature embedding vector. An array of numbers with the length of [NearestNeighborSearchConfig.dimensions]. | [optional] 
**numeric_restricts** | [**List[GoogleCloudAiplatformV1IndexDatapointNumericRestriction]**](GoogleCloudAiplatformV1IndexDatapointNumericRestriction.md) | Optional. List of Restrict of the datapoint, used to perform \&quot;restricted searches\&quot; where boolean rule are used to filter the subset of the database eligible for matching. This uses numeric comparisons. | [optional] 
**restricts** | [**List[GoogleCloudAiplatformV1IndexDatapointRestriction]**](GoogleCloudAiplatformV1IndexDatapointRestriction.md) | Optional. List of Restrict of the datapoint, used to perform \&quot;restricted searches\&quot; where boolean rule are used to filter the subset of the database eligible for matching. This uses categorical tokens. See: https://cloud.google.com/vertex-ai/docs/matching-engine/filtering | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_index_datapoint import GoogleCloudAiplatformV1IndexDatapoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1IndexDatapoint from a JSON string
google_cloud_aiplatform_v1_index_datapoint_instance = GoogleCloudAiplatformV1IndexDatapoint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1IndexDatapoint.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_index_datapoint_dict = google_cloud_aiplatform_v1_index_datapoint_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1IndexDatapoint from a dict
google_cloud_aiplatform_v1_index_datapoint_from_dict = GoogleCloudAiplatformV1IndexDatapoint.from_dict(google_cloud_aiplatform_v1_index_datapoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


