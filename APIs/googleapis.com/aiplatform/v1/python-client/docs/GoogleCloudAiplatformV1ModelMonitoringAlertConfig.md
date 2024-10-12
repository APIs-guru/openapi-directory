# GoogleCloudAiplatformV1ModelMonitoringAlertConfig

The alert config for model monitoring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_alert_config** | [**GoogleCloudAiplatformV1ModelMonitoringAlertConfigEmailAlertConfig**](GoogleCloudAiplatformV1ModelMonitoringAlertConfigEmailAlertConfig.md) |  | [optional] 
**enable_logging** | **bool** | Dump the anomalies to Cloud Logging. The anomalies will be put to json payload encoded from proto google.cloud.aiplatform.logging.ModelMonitoringAnomaliesLogEntry. This can be further sinked to Pub/Sub or any other services supported by Cloud Logging. | [optional] 
**notification_channels** | **List[str]** | Resource names of the NotificationChannels to send alert. Must be of the format &#x60;projects//notificationChannels/&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_model_monitoring_alert_config import GoogleCloudAiplatformV1ModelMonitoringAlertConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ModelMonitoringAlertConfig from a JSON string
google_cloud_aiplatform_v1_model_monitoring_alert_config_instance = GoogleCloudAiplatformV1ModelMonitoringAlertConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ModelMonitoringAlertConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_model_monitoring_alert_config_dict = google_cloud_aiplatform_v1_model_monitoring_alert_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ModelMonitoringAlertConfig from a dict
google_cloud_aiplatform_v1_model_monitoring_alert_config_from_dict = GoogleCloudAiplatformV1ModelMonitoringAlertConfig.from_dict(google_cloud_aiplatform_v1_model_monitoring_alert_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


