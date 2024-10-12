# GoogleCloudAiplatformV1beta1DeploymentResourcePool

A description of resources that can be shared by multiple DeployedModels, whose underlying specification consists of a DedicatedResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this DeploymentResourcePool was created. | [optional] [readonly] 
**dedicated_resources** | [**GoogleCloudAiplatformV1beta1DedicatedResources**](GoogleCloudAiplatformV1beta1DedicatedResources.md) |  | [optional] 
**name** | **str** | Immutable. The resource name of the DeploymentResourcePool. Format: &#x60;projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_deployment_resource_pool import GoogleCloudAiplatformV1beta1DeploymentResourcePool

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeploymentResourcePool from a JSON string
google_cloud_aiplatform_v1beta1_deployment_resource_pool_instance = GoogleCloudAiplatformV1beta1DeploymentResourcePool.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeploymentResourcePool.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_deployment_resource_pool_dict = google_cloud_aiplatform_v1beta1_deployment_resource_pool_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeploymentResourcePool from a dict
google_cloud_aiplatform_v1beta1_deployment_resource_pool_from_dict = GoogleCloudAiplatformV1beta1DeploymentResourcePool.from_dict(google_cloud_aiplatform_v1beta1_deployment_resource_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


