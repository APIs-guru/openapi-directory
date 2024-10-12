# PolicyControllerMonitoringConfig

MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: [\"cloudmonitoring\", \"prometheus\"]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | **List[str]** | Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_monitoring_config import PolicyControllerMonitoringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerMonitoringConfig from a JSON string
policy_controller_monitoring_config_instance = PolicyControllerMonitoringConfig.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerMonitoringConfig.to_json())

# convert the object into a dict
policy_controller_monitoring_config_dict = policy_controller_monitoring_config_instance.to_dict()
# create an instance of PolicyControllerMonitoringConfig from a dict
policy_controller_monitoring_config_from_dict = PolicyControllerMonitoringConfig.from_dict(policy_controller_monitoring_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


