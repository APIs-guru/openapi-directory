# MonitoringConfig

MonitoringConfig is cluster monitoring configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_datapath_observability_config** | [**AdvancedDatapathObservabilityConfig**](AdvancedDatapathObservabilityConfig.md) |  | [optional] 
**component_config** | [**MonitoringComponentConfig**](MonitoringComponentConfig.md) |  | [optional] 
**managed_prometheus_config** | [**ManagedPrometheusConfig**](ManagedPrometheusConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.monitoring_config import MonitoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringConfig from a JSON string
monitoring_config_instance = MonitoringConfig.from_json(json)
# print the JSON string representation of the object
print(MonitoringConfig.to_json())

# convert the object into a dict
monitoring_config_dict = monitoring_config_instance.to_dict()
# create an instance of MonitoringConfig from a dict
monitoring_config_from_dict = MonitoringConfig.from_dict(monitoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


