# GoogleCloudAiplatformV1beta1ListDeploymentResourcePoolsResponse

Response message for ListDeploymentResourcePools method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_resource_pools** | [**List[GoogleCloudAiplatformV1beta1DeploymentResourcePool]**](GoogleCloudAiplatformV1beta1DeploymentResourcePool.md) | The DeploymentResourcePools from the specified location. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_deployment_resource_pools_response import GoogleCloudAiplatformV1beta1ListDeploymentResourcePoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListDeploymentResourcePoolsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_deployment_resource_pools_response_instance = GoogleCloudAiplatformV1beta1ListDeploymentResourcePoolsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListDeploymentResourcePoolsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_deployment_resource_pools_response_dict = google_cloud_aiplatform_v1beta1_list_deployment_resource_pools_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListDeploymentResourcePoolsResponse from a dict
google_cloud_aiplatform_v1beta1_list_deployment_resource_pools_response_from_dict = GoogleCloudAiplatformV1beta1ListDeploymentResourcePoolsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_deployment_resource_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


