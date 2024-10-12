# GoogleCloudAiplatformV1DeployModelRequest

Request message for EndpointService.DeployModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model** | [**GoogleCloudAiplatformV1DeployedModel**](GoogleCloudAiplatformV1DeployedModel.md) |  | [optional] 
**traffic_split** | **Dict[str, int]** | A map from a DeployedModel&#39;s ID to the percentage of this Endpoint&#39;s traffic that should be forwarded to that DeployedModel. If this field is non-empty, then the Endpoint&#39;s traffic_split will be overwritten with it. To refer to the ID of the just being deployed Model, a \&quot;0\&quot; should be used, and the actual ID of the new DeployedModel will be filled in its place by this method. The traffic percentage values must add up to 100. If this field is empty, then the Endpoint&#39;s traffic_split is not updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_deploy_model_request import GoogleCloudAiplatformV1DeployModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeployModelRequest from a JSON string
google_cloud_aiplatform_v1_deploy_model_request_instance = GoogleCloudAiplatformV1DeployModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeployModelRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_deploy_model_request_dict = google_cloud_aiplatform_v1_deploy_model_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeployModelRequest from a dict
google_cloud_aiplatform_v1_deploy_model_request_from_dict = GoogleCloudAiplatformV1DeployModelRequest.from_dict(google_cloud_aiplatform_v1_deploy_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


