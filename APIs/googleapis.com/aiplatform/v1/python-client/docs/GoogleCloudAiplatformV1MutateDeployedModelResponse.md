# GoogleCloudAiplatformV1MutateDeployedModelResponse

Response message for EndpointService.MutateDeployedModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model** | [**GoogleCloudAiplatformV1DeployedModel**](GoogleCloudAiplatformV1DeployedModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_mutate_deployed_model_response import GoogleCloudAiplatformV1MutateDeployedModelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MutateDeployedModelResponse from a JSON string
google_cloud_aiplatform_v1_mutate_deployed_model_response_instance = GoogleCloudAiplatformV1MutateDeployedModelResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MutateDeployedModelResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_mutate_deployed_model_response_dict = google_cloud_aiplatform_v1_mutate_deployed_model_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MutateDeployedModelResponse from a dict
google_cloud_aiplatform_v1_mutate_deployed_model_response_from_dict = GoogleCloudAiplatformV1MutateDeployedModelResponse.from_dict(google_cloud_aiplatform_v1_mutate_deployed_model_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


