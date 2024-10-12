# GoogleCloudAiplatformV1beta1CreateDeploymentResourcePoolRequest

Request message for CreateDeploymentResourcePool method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_resource_pool** | [**GoogleCloudAiplatformV1beta1DeploymentResourcePool**](GoogleCloudAiplatformV1beta1DeploymentResourcePool.md) |  | [optional] 
**deployment_resource_pool_id** | **str** | Required. The ID to use for the DeploymentResourcePool, which will become the final component of the DeploymentResourcePool&#39;s resource name. The maximum length is 63 characters, and valid characters are &#x60;/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_create_deployment_resource_pool_request import GoogleCloudAiplatformV1beta1CreateDeploymentResourcePoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1CreateDeploymentResourcePoolRequest from a JSON string
google_cloud_aiplatform_v1beta1_create_deployment_resource_pool_request_instance = GoogleCloudAiplatformV1beta1CreateDeploymentResourcePoolRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1CreateDeploymentResourcePoolRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_create_deployment_resource_pool_request_dict = google_cloud_aiplatform_v1beta1_create_deployment_resource_pool_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1CreateDeploymentResourcePoolRequest from a dict
google_cloud_aiplatform_v1beta1_create_deployment_resource_pool_request_from_dict = GoogleCloudAiplatformV1beta1CreateDeploymentResourcePoolRequest.from_dict(google_cloud_aiplatform_v1beta1_create_deployment_resource_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


