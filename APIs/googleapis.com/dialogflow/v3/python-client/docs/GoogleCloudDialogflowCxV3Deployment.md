# GoogleCloudDialogflowCxV3Deployment

Represents a deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | End time of this deployment. | [optional] 
**flow_version** | **str** | The name of the flow version for this deployment. Format: projects//locations//agents//flows//versions/. | [optional] 
**name** | **str** | The name of the deployment. Format: projects//locations//agents//environments//deployments/. | [optional] 
**result** | [**GoogleCloudDialogflowCxV3DeploymentResult**](GoogleCloudDialogflowCxV3DeploymentResult.md) |  | [optional] 
**start_time** | **str** | Start time of this deployment. | [optional] 
**state** | **str** | The current state of the deployment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_deployment import GoogleCloudDialogflowCxV3Deployment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3Deployment from a JSON string
google_cloud_dialogflow_cx_v3_deployment_instance = GoogleCloudDialogflowCxV3Deployment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3Deployment.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_deployment_dict = google_cloud_dialogflow_cx_v3_deployment_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3Deployment from a dict
google_cloud_dialogflow_cx_v3_deployment_from_dict = GoogleCloudDialogflowCxV3Deployment.from_dict(google_cloud_dialogflow_cx_v3_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


