# GoogleCloudAiplatformV1beta1PublisherModelCallToActionDeploy

Model metadata that is needed for UploadModel or DeployModel/CreateEndpoint requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_uri** | **str** | Optional. The path to the directory containing the Model artifact and any of its supporting files. | [optional] 
**automatic_resources** | [**GoogleCloudAiplatformV1beta1AutomaticResources**](GoogleCloudAiplatformV1beta1AutomaticResources.md) |  | [optional] 
**container_spec** | [**GoogleCloudAiplatformV1beta1ModelContainerSpec**](GoogleCloudAiplatformV1beta1ModelContainerSpec.md) |  | [optional] 
**dedicated_resources** | [**GoogleCloudAiplatformV1beta1DedicatedResources**](GoogleCloudAiplatformV1beta1DedicatedResources.md) |  | [optional] 
**large_model_reference** | [**GoogleCloudAiplatformV1beta1LargeModelReference**](GoogleCloudAiplatformV1beta1LargeModelReference.md) |  | [optional] 
**model_display_name** | **str** | Optional. Default model display name. | [optional] 
**public_artifact_uri** | **str** | Optional. The signed URI for ephemeral Cloud Storage access to model artifact. | [optional] 
**shared_resources** | **str** | The resource name of the shared DeploymentResourcePool to deploy on. Format: &#x60;projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}&#x60; | [optional] 
**title** | **str** | Required. The title of the regional resource reference. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_publisher_model_call_to_action_deploy import GoogleCloudAiplatformV1beta1PublisherModelCallToActionDeploy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PublisherModelCallToActionDeploy from a JSON string
google_cloud_aiplatform_v1beta1_publisher_model_call_to_action_deploy_instance = GoogleCloudAiplatformV1beta1PublisherModelCallToActionDeploy.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PublisherModelCallToActionDeploy.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_publisher_model_call_to_action_deploy_dict = google_cloud_aiplatform_v1beta1_publisher_model_call_to_action_deploy_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PublisherModelCallToActionDeploy from a dict
google_cloud_aiplatform_v1beta1_publisher_model_call_to_action_deploy_from_dict = GoogleCloudAiplatformV1beta1PublisherModelCallToActionDeploy.from_dict(google_cloud_aiplatform_v1beta1_publisher_model_call_to_action_deploy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


