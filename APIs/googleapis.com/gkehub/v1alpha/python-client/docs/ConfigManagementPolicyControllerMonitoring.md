# ConfigManagementPolicyControllerMonitoring

PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: [\"cloudmonitoring\", \"prometheus\"]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | **List[str]** | Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. | [optional] 

## Example

```python
from openapi_client.models.config_management_policy_controller_monitoring import ConfigManagementPolicyControllerMonitoring

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementPolicyControllerMonitoring from a JSON string
config_management_policy_controller_monitoring_instance = ConfigManagementPolicyControllerMonitoring.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementPolicyControllerMonitoring.to_json())

# convert the object into a dict
config_management_policy_controller_monitoring_dict = config_management_policy_controller_monitoring_instance.to_dict()
# create an instance of ConfigManagementPolicyControllerMonitoring from a dict
config_management_policy_controller_monitoring_from_dict = ConfigManagementPolicyControllerMonitoring.from_dict(config_management_policy_controller_monitoring_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


