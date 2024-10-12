# IoTSecuritySolutionAnalyticsModelProperties

Security analytics properties of your IoT Security solution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices_metrics** | [**List[IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner]**](IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner.md) | List of device metrics by the aggregation date. | [optional] [readonly] 
**metrics** | [**IoTSeverityMetrics**](IoTSeverityMetrics.md) |  | [optional] 
**most_prevalent_device_alerts** | [**List[IoTSecurityDeviceAlert]**](IoTSecurityDeviceAlert.md) | List of alerts with the count of raised alerts | [optional] 
**most_prevalent_device_recommendations** | [**List[IoTSecurityDeviceRecommendation]**](IoTSecurityDeviceRecommendation.md) | List of aggregated recommendation data, per recommendation type, per device. | [optional] 
**top_alerted_devices** | [**List[IoTSecurityAlertedDevice]**](IoTSecurityAlertedDevice.md) | List of devices with open alerts including the count of alerts per device. | [optional] 
**unhealthy_device_count** | **int** | Number of unhealthy devices within your IoT Security solution. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_solution_analytics_model_properties import IoTSecuritySolutionAnalyticsModelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionAnalyticsModelProperties from a JSON string
io_t_security_solution_analytics_model_properties_instance = IoTSecuritySolutionAnalyticsModelProperties.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionAnalyticsModelProperties.to_json())

# convert the object into a dict
io_t_security_solution_analytics_model_properties_dict = io_t_security_solution_analytics_model_properties_instance.to_dict()
# create an instance of IoTSecuritySolutionAnalyticsModelProperties from a dict
io_t_security_solution_analytics_model_properties_from_dict = IoTSecuritySolutionAnalyticsModelProperties.from_dict(io_t_security_solution_analytics_model_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


