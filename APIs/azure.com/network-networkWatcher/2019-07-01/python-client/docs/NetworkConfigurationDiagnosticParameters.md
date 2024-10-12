# NetworkConfigurationDiagnosticParameters

Parameters to get network configuration diagnostic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profiles** | [**List[NetworkConfigurationDiagnosticProfile]**](NetworkConfigurationDiagnosticProfile.md) | List of network configuration diagnostic profiles. | 
**target_resource_id** | **str** | The ID of the target resource to perform network configuration diagnostic. Valid options are VM, NetworkInterface, VMSS/NetworkInterface and Application Gateway. | 
**verbosity_level** | **str** | Verbosity level. | [optional] 

## Example

```python
from openapi_client.models.network_configuration_diagnostic_parameters import NetworkConfigurationDiagnosticParameters

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfigurationDiagnosticParameters from a JSON string
network_configuration_diagnostic_parameters_instance = NetworkConfigurationDiagnosticParameters.from_json(json)
# print the JSON string representation of the object
print(NetworkConfigurationDiagnosticParameters.to_json())

# convert the object into a dict
network_configuration_diagnostic_parameters_dict = network_configuration_diagnostic_parameters_instance.to_dict()
# create an instance of NetworkConfigurationDiagnosticParameters from a dict
network_configuration_diagnostic_parameters_from_dict = NetworkConfigurationDiagnosticParameters.from_dict(network_configuration_diagnostic_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


