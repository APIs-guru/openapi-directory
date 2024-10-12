# GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue

The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute** | **str** | Absolute value threshold. | [optional] 
**percentage** | **int** | Percentage threshold. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_integration_alert_config_threshold_value import GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue from a JSON string
google_cloud_integrations_v1alpha_integration_alert_config_threshold_value_instance = GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_integration_alert_config_threshold_value_dict = google_cloud_integrations_v1alpha_integration_alert_config_threshold_value_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue from a dict
google_cloud_integrations_v1alpha_integration_alert_config_threshold_value_from_dict = GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue.from_dict(google_cloud_integrations_v1alpha_integration_alert_config_threshold_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


