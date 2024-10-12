# MonitoringComponentConfig

MonitoringComponentConfig is cluster monitoring component configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_components** | **List[str]** | Select components to collect metrics. An empty set would disable all monitoring. | [optional] 

## Example

```python
from openapi_client.models.monitoring_component_config import MonitoringComponentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringComponentConfig from a JSON string
monitoring_component_config_instance = MonitoringComponentConfig.from_json(json)
# print the JSON string representation of the object
print(MonitoringComponentConfig.to_json())

# convert the object into a dict
monitoring_component_config_dict = monitoring_component_config_instance.to_dict()
# create an instance of MonitoringComponentConfig from a dict
monitoring_component_config_from_dict = MonitoringComponentConfig.from_dict(monitoring_component_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


