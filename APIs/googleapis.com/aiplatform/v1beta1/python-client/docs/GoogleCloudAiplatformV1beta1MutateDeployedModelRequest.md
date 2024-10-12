# GoogleCloudAiplatformV1beta1MutateDeployedModelRequest

Request message for EndpointService.MutateDeployedModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model** | [**GoogleCloudAiplatformV1beta1DeployedModel**](GoogleCloudAiplatformV1beta1DeployedModel.md) |  | [optional] 
**update_mask** | **str** | Required. The update mask applies to the resource. See google.protobuf.FieldMask. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_mutate_deployed_model_request import GoogleCloudAiplatformV1beta1MutateDeployedModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1MutateDeployedModelRequest from a JSON string
google_cloud_aiplatform_v1beta1_mutate_deployed_model_request_instance = GoogleCloudAiplatformV1beta1MutateDeployedModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1MutateDeployedModelRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_mutate_deployed_model_request_dict = google_cloud_aiplatform_v1beta1_mutate_deployed_model_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1MutateDeployedModelRequest from a dict
google_cloud_aiplatform_v1beta1_mutate_deployed_model_request_from_dict = GoogleCloudAiplatformV1beta1MutateDeployedModelRequest.from_dict(google_cloud_aiplatform_v1beta1_mutate_deployed_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


