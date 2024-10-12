# GoogleCloudAiplatformV1UndeployModelRequest

Request message for EndpointService.UndeployModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model_id** | **str** | Required. The ID of the DeployedModel to be undeployed from the Endpoint. | [optional] 
**traffic_split** | **Dict[str, int]** | If this field is provided, then the Endpoint&#39;s traffic_split will be overwritten with it. If last DeployedModel is being undeployed from the Endpoint, the [Endpoint.traffic_split] will always end up empty when this call returns. A DeployedModel will be successfully undeployed only if it doesn&#39;t have any traffic assigned to it when this method executes, or if this field unassigns any traffic to it. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_undeploy_model_request import GoogleCloudAiplatformV1UndeployModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1UndeployModelRequest from a JSON string
google_cloud_aiplatform_v1_undeploy_model_request_instance = GoogleCloudAiplatformV1UndeployModelRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1UndeployModelRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_undeploy_model_request_dict = google_cloud_aiplatform_v1_undeploy_model_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1UndeployModelRequest from a dict
google_cloud_aiplatform_v1_undeploy_model_request_from_dict = GoogleCloudAiplatformV1UndeployModelRequest.from_dict(google_cloud_aiplatform_v1_undeploy_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


