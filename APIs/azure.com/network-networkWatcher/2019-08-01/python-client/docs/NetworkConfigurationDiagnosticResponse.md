# NetworkConfigurationDiagnosticResponse

Results of network configuration diagnostic on the target resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[NetworkConfigurationDiagnosticResult]**](NetworkConfigurationDiagnosticResult.md) | List of network configuration diagnostic results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_configuration_diagnostic_response import NetworkConfigurationDiagnosticResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfigurationDiagnosticResponse from a JSON string
network_configuration_diagnostic_response_instance = NetworkConfigurationDiagnosticResponse.from_json(json)
# print the JSON string representation of the object
print(NetworkConfigurationDiagnosticResponse.to_json())

# convert the object into a dict
network_configuration_diagnostic_response_dict = network_configuration_diagnostic_response_instance.to_dict()
# create an instance of NetworkConfigurationDiagnosticResponse from a dict
network_configuration_diagnostic_response_from_dict = NetworkConfigurationDiagnosticResponse.from_dict(network_configuration_diagnostic_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


