# GoogleCloudAiplatformV1beta1Endpoint

Models are deployed into it, and afterwards Endpoint is called to obtain predictions and explanations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this Endpoint was created. | [optional] [readonly] 
**deployed_models** | [**List[GoogleCloudAiplatformV1beta1DeployedModel]**](GoogleCloudAiplatformV1beta1DeployedModel.md) | Output only. The models deployed in this Endpoint. To add or remove DeployedModels use EndpointService.DeployModel and EndpointService.UndeployModel respectively. | [optional] [readonly] 
**description** | **str** | The description of the Endpoint. | [optional] 
**display_name** | **str** | Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**enable_private_service_connect** | **bool** | Deprecated: If true, expose the Endpoint via private service connect. Only one of the fields, network or enable_private_service_connect, can be set. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**model_deployment_monitoring_job** | **str** | Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by JobService.CreateModelDeploymentMonitoringJob. Format: &#x60;projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}&#x60; | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the Endpoint. | [optional] [readonly] 
**network** | **str** | Optional. The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): &#x60;projects/{project}/global/networks/{network}&#x60;. Where &#x60;{project}&#x60; is a project number, as in &#x60;12345&#x60;, and &#x60;{network}&#x60; is network name. | [optional] 
**predict_request_response_logging_config** | [**GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig**](GoogleCloudAiplatformV1beta1PredictRequestResponseLoggingConfig.md) |  | [optional] 
**private_service_connect_config** | [**GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig**](GoogleCloudAiplatformV1beta1PrivateServiceConnectConfig.md) |  | [optional] 
**traffic_split** | **Dict[str, int]** | A map from a DeployedModel&#39;s ID to the percentage of this Endpoint&#39;s traffic that should be forwarded to that DeployedModel. If a DeployedModel&#39;s ID is not listed in this map, then it receives no traffic. The traffic percentage values must add up to 100, or map must be empty if the Endpoint is to not accept any traffic at a moment. | [optional] 
**update_time** | **str** | Output only. Timestamp when this Endpoint was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_endpoint import GoogleCloudAiplatformV1beta1Endpoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Endpoint from a JSON string
google_cloud_aiplatform_v1beta1_endpoint_instance = GoogleCloudAiplatformV1beta1Endpoint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Endpoint.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_endpoint_dict = google_cloud_aiplatform_v1beta1_endpoint_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Endpoint from a dict
google_cloud_aiplatform_v1beta1_endpoint_from_dict = GoogleCloudAiplatformV1beta1Endpoint.from_dict(google_cloud_aiplatform_v1beta1_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


