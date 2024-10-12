# GoogleCloudAiplatformV1DeployedIndexRef

Points to a DeployedIndex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_index_id** | **str** | Immutable. The ID of the DeployedIndex in the above IndexEndpoint. | [optional] 
**display_name** | **str** | Output only. The display name of the DeployedIndex. | [optional] [readonly] 
**index_endpoint** | **str** | Immutable. A resource name of the IndexEndpoint. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_deployed_index_ref import GoogleCloudAiplatformV1DeployedIndexRef

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeployedIndexRef from a JSON string
google_cloud_aiplatform_v1_deployed_index_ref_instance = GoogleCloudAiplatformV1DeployedIndexRef.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeployedIndexRef.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_deployed_index_ref_dict = google_cloud_aiplatform_v1_deployed_index_ref_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeployedIndexRef from a dict
google_cloud_aiplatform_v1_deployed_index_ref_from_dict = GoogleCloudAiplatformV1DeployedIndexRef.from_dict(google_cloud_aiplatform_v1_deployed_index_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


