# IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** | the date of the metrics | [optional] 
**devices_metrics** | [**IoTSeverityMetrics**](IoTSeverityMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.io_t_security_solution_analytics_model_properties_devices_metrics_inner import IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner from a JSON string
io_t_security_solution_analytics_model_properties_devices_metrics_inner_instance = IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner.from_json(json)
# print the JSON string representation of the object
print(IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner.to_json())

# convert the object into a dict
io_t_security_solution_analytics_model_properties_devices_metrics_inner_dict = io_t_security_solution_analytics_model_properties_devices_metrics_inner_instance.to_dict()
# create an instance of IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner from a dict
io_t_security_solution_analytics_model_properties_devices_metrics_inner_from_dict = IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsInner.from_dict(io_t_security_solution_analytics_model_properties_devices_metrics_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


