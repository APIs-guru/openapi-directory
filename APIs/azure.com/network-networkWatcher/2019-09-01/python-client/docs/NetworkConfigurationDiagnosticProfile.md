# NetworkConfigurationDiagnosticProfile

Parameters to compare with network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | Traffic destination. Accepted values are: &#39;*&#39;, IP Address/CIDR, Service Tag. | 
**destination_port** | **str** | Traffic destination port. Accepted values are &#39;*&#39; and a single port in the range (0 - 65535). | 
**direction** | [**Direction**](Direction.md) |  | 
**protocol** | **str** | Protocol to be verified on. Accepted values are &#39;*&#39;, TCP, UDP. | 
**source** | **str** | Traffic source. Accepted values are &#39;*&#39;, IP Address/CIDR, Service Tag. | 

## Example

```python
from openapi_client.models.network_configuration_diagnostic_profile import NetworkConfigurationDiagnosticProfile

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfigurationDiagnosticProfile from a JSON string
network_configuration_diagnostic_profile_instance = NetworkConfigurationDiagnosticProfile.from_json(json)
# print the JSON string representation of the object
print(NetworkConfigurationDiagnosticProfile.to_json())

# convert the object into a dict
network_configuration_diagnostic_profile_dict = network_configuration_diagnostic_profile_instance.to_dict()
# create an instance of NetworkConfigurationDiagnosticProfile from a dict
network_configuration_diagnostic_profile_from_dict = NetworkConfigurationDiagnosticProfile.from_dict(network_configuration_diagnostic_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


