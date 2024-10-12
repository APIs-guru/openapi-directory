# GoogleCloudAiplatformV1QueryDeployedModelsResponse

Response message for QueryDeployedModels method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model_refs** | [**List[GoogleCloudAiplatformV1DeployedModelRef]**](GoogleCloudAiplatformV1DeployedModelRef.md) | References to the DeployedModels that share the specified deploymentResourcePool. | [optional] 
**deployed_models** | [**List[GoogleCloudAiplatformV1DeployedModel]**](GoogleCloudAiplatformV1DeployedModel.md) | DEPRECATED Use deployed_model_refs instead. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**total_deployed_model_count** | **int** | The total number of DeployedModels on this DeploymentResourcePool. | [optional] 
**total_endpoint_count** | **int** | The total number of Endpoints that have DeployedModels on this DeploymentResourcePool. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_query_deployed_models_response import GoogleCloudAiplatformV1QueryDeployedModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1QueryDeployedModelsResponse from a JSON string
google_cloud_aiplatform_v1_query_deployed_models_response_instance = GoogleCloudAiplatformV1QueryDeployedModelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1QueryDeployedModelsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_query_deployed_models_response_dict = google_cloud_aiplatform_v1_query_deployed_models_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1QueryDeployedModelsResponse from a dict
google_cloud_aiplatform_v1_query_deployed_models_response_from_dict = GoogleCloudAiplatformV1QueryDeployedModelsResponse.from_dict(google_cloud_aiplatform_v1_query_deployed_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


