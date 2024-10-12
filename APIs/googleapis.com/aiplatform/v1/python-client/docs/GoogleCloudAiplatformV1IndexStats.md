# GoogleCloudAiplatformV1IndexStats

Stats of the Index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shards_count** | **int** | Output only. The number of shards in the Index. | [optional] [readonly] 
**vectors_count** | **str** | Output only. The number of vectors in the Index. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_index_stats import GoogleCloudAiplatformV1IndexStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1IndexStats from a JSON string
google_cloud_aiplatform_v1_index_stats_instance = GoogleCloudAiplatformV1IndexStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1IndexStats.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_index_stats_dict = google_cloud_aiplatform_v1_index_stats_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1IndexStats from a dict
google_cloud_aiplatform_v1_index_stats_from_dict = GoogleCloudAiplatformV1IndexStats.from_dict(google_cloud_aiplatform_v1_index_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


