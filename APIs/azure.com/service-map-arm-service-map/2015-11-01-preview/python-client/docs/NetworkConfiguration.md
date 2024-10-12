# NetworkConfiguration

Describes the network configuration of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_ipv4_gateways** | **List[str]** | Default IPv4 gateways. | [optional] 
**dns_names** | **List[str]** | DNS names associated with the machine. | [optional] 
**ipv4_interfaces** | [**List[Ipv4NetworkInterface]**](Ipv4NetworkInterface.md) | IPv4 interfaces. | [optional] 
**ipv6_interfaces** | [**List[Ipv6NetworkInterface]**](Ipv6NetworkInterface.md) | IPv6 interfaces. | [optional] 
**mac_addresses** | **List[str]** | MAC addresses of all active network interfaces. | [optional] 

## Example

```python
from openapi_client.models.network_configuration import NetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfiguration from a JSON string
network_configuration_instance = NetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(NetworkConfiguration.to_json())

# convert the object into a dict
network_configuration_dict = network_configuration_instance.to_dict()
# create an instance of NetworkConfiguration from a dict
network_configuration_from_dict = NetworkConfiguration.from_dict(network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


