# GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringScheduleConfig

The config for scheduling monitoring job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monitor_interval** | **str** | Required. The model monitoring job scheduling interval. It will be rounded up to next full hour. This defines how often the monitoring jobs are triggered. | [optional] 
**monitor_window** | **str** | The time window of the prediction data being included in each prediction dataset. This window specifies how long the data should be collected from historical model results for each run. If not set, ModelDeploymentMonitoringScheduleConfig.monitor_interval will be used. e.g. If currently the cutoff time is 2022-01-08 14:30:00 and the monitor_window is set to be 3600, then data from 2022-01-08 13:30:00 to 2022-01-08 14:30:00 will be retrieved and aggregated to calculate the monitoring statistics. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_deployment_monitoring_schedule_config import GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringScheduleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringScheduleConfig from a JSON string
google_cloud_aiplatform_v1beta1_model_deployment_monitoring_schedule_config_instance = GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringScheduleConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringScheduleConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_deployment_monitoring_schedule_config_dict = google_cloud_aiplatform_v1beta1_model_deployment_monitoring_schedule_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringScheduleConfig from a dict
google_cloud_aiplatform_v1beta1_model_deployment_monitoring_schedule_config_from_dict = GoogleCloudAiplatformV1beta1ModelDeploymentMonitoringScheduleConfig.from_dict(google_cloud_aiplatform_v1beta1_model_deployment_monitoring_schedule_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


