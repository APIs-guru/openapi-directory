# NetworkConfigurationDiagnosticResult

Network configuration diagnostic result corresponded to provided traffic query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_security_group_result** | [**NetworkSecurityGroupResult**](NetworkSecurityGroupResult.md) |  | [optional] 
**traffic_query** | [**TrafficQuery**](TrafficQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_configuration_diagnostic_result import NetworkConfigurationDiagnosticResult

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfigurationDiagnosticResult from a JSON string
network_configuration_diagnostic_result_instance = NetworkConfigurationDiagnosticResult.from_json(json)
# print the JSON string representation of the object
print(NetworkConfigurationDiagnosticResult.to_json())

# convert the object into a dict
network_configuration_diagnostic_result_dict = network_configuration_diagnostic_result_instance.to_dict()
# create an instance of NetworkConfigurationDiagnosticResult from a dict
network_configuration_diagnostic_result_from_dict = NetworkConfigurationDiagnosticResult.from_dict(network_configuration_diagnostic_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


