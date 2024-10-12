# GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfigEmailAlertConfig

The config for email alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_emails** | **List[str]** | The email addresses to send the alert. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_monitoring_alert_config_email_alert_config import GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfigEmailAlertConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfigEmailAlertConfig from a JSON string
google_cloud_aiplatform_v1beta1_model_monitoring_alert_config_email_alert_config_instance = GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfigEmailAlertConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfigEmailAlertConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_monitoring_alert_config_email_alert_config_dict = google_cloud_aiplatform_v1beta1_model_monitoring_alert_config_email_alert_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfigEmailAlertConfig from a dict
google_cloud_aiplatform_v1beta1_model_monitoring_alert_config_email_alert_config_from_dict = GoogleCloudAiplatformV1beta1ModelMonitoringAlertConfigEmailAlertConfig.from_dict(google_cloud_aiplatform_v1beta1_model_monitoring_alert_config_email_alert_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


