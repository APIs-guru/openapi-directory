# GoogleCloudAiplatformV1DeployIndexOperationMetadata

Runtime operation information for IndexEndpointService.DeployIndex.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_index_id** | **str** | The unique index id specified by user | [optional] 
**generic_metadata** | [**GoogleCloudAiplatformV1GenericOperationMetadata**](GoogleCloudAiplatformV1GenericOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_deploy_index_operation_metadata import GoogleCloudAiplatformV1DeployIndexOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeployIndexOperationMetadata from a JSON string
google_cloud_aiplatform_v1_deploy_index_operation_metadata_instance = GoogleCloudAiplatformV1DeployIndexOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeployIndexOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_deploy_index_operation_metadata_dict = google_cloud_aiplatform_v1_deploy_index_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeployIndexOperationMetadata from a dict
google_cloud_aiplatform_v1_deploy_index_operation_metadata_from_dict = GoogleCloudAiplatformV1DeployIndexOperationMetadata.from_dict(google_cloud_aiplatform_v1_deploy_index_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


