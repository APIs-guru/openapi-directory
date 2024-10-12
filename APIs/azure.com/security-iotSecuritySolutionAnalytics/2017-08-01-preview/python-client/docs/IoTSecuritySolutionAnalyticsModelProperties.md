# IoTSecuritySolutionAnalyticsModelProperties

Security Analytics of a security solution properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices_metrics** | [**List[IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner]**](IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner.md) | The list of devices metrics by the aggregated date. | [optional] [readonly] 
**metrics** | [**IoTSeverityMetrics**](IoTSeverityMetrics.md) |  | [optional] 
**most_prevalent_device_alerts** | [**IoTSecurityDeviceAlertsList**](IoTSecurityDeviceAlertsList.md) |  | [optional] 
**most_prevalent_device_recommendations** | [**IoTSecurityDeviceRecommendationsList**](IoTSecurityDeviceRecommendationsList.md) |  | [optional] 
**top_alerted_devices** | [**IoTSecurityAlertedDevicesList**](IoTSecurityAlertedDevicesList.md) |  | [optional] 
**unhealthy_device_count** | **int** | number of unhealthy devices | [optional] [readonly] 

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


