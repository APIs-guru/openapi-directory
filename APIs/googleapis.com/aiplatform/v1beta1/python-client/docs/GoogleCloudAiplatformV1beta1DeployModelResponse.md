# GoogleCloudAiplatformV1beta1DeployModelResponse

Response message for EndpointService.DeployModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model** | [**GoogleCloudAiplatformV1beta1DeployedModel**](GoogleCloudAiplatformV1beta1DeployedModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_deploy_model_response import GoogleCloudAiplatformV1beta1DeployModelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeployModelResponse from a JSON string
google_cloud_aiplatform_v1beta1_deploy_model_response_instance = GoogleCloudAiplatformV1beta1DeployModelResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeployModelResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_deploy_model_response_dict = google_cloud_aiplatform_v1beta1_deploy_model_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeployModelResponse from a dict
google_cloud_aiplatform_v1beta1_deploy_model_response_from_dict = GoogleCloudAiplatformV1beta1DeployModelResponse.from_dict(google_cloud_aiplatform_v1beta1_deploy_model_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


