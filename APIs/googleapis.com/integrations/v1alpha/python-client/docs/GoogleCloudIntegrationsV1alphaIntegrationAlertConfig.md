# GoogleCloudIntegrationsV1alphaIntegrationAlertConfig

Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_period** | **str** | The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week). For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours. | [optional] 
**alert_threshold** | **int** | For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired. | [optional] 
**disable_alert** | **bool** | Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this integration alert. | [optional] 
**display_name** | **str** | Name of the alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the integration. | [optional] 
**duration_threshold** | **str** | Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. | [optional] 
**metric_type** | **str** | The type of metric. | [optional] 
**only_final_attempt** | **bool** | For either events or tasks, depending on the type of alert, count only final attempts, not retries. | [optional] 
**threshold_type** | **str** | The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. | [optional] 
**threshold_value** | [**GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue**](GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_integration_alert_config import GoogleCloudIntegrationsV1alphaIntegrationAlertConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaIntegrationAlertConfig from a JSON string
google_cloud_integrations_v1alpha_integration_alert_config_instance = GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_integration_alert_config_dict = google_cloud_integrations_v1alpha_integration_alert_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaIntegrationAlertConfig from a dict
google_cloud_integrations_v1alpha_integration_alert_config_from_dict = GoogleCloudIntegrationsV1alphaIntegrationAlertConfig.from_dict(google_cloud_integrations_v1alpha_integration_alert_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


