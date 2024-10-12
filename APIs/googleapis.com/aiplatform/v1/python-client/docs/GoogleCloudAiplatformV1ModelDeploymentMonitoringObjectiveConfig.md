# GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig

ModelDeploymentMonitoringObjectiveConfig contains the pair of deployed_model_id to ModelMonitoringObjectiveConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model_id** | **str** | The DeployedModel ID of the objective config. | [optional] 
**objective_config** | [**GoogleCloudAiplatformV1ModelMonitoringObjectiveConfig**](GoogleCloudAiplatformV1ModelMonitoringObjectiveConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_deployment_monitoring_objective_config import GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig from a JSON string
google_cloud_aiplatform_v1_model_deployment_monitoring_objective_config_instance = GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_deployment_monitoring_objective_config_dict = google_cloud_aiplatform_v1_model_deployment_monitoring_objective_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig from a dict
google_cloud_aiplatform_v1_model_deployment_monitoring_objective_config_from_dict = GoogleCloudAiplatformV1ModelDeploymentMonitoringObjectiveConfig.from_dict(google_cloud_aiplatform_v1_model_deployment_monitoring_objective_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


