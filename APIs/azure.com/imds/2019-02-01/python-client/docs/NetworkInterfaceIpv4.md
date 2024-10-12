# NetworkInterfaceIpv4

This contains the IPv4 address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | [**List[Ipv4Properties]**](Ipv4Properties.md) | This is the IP address | [optional] 
**subnet** | [**List[SubnetProperties]**](SubnetProperties.md) | This is the subnet | [optional] 

## Example

```python
from openapi_client.models.network_interface_ipv4 import NetworkInterfaceIpv4

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceIpv4 from a JSON string
network_interface_ipv4_instance = NetworkInterfaceIpv4.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceIpv4.to_json())

# convert the object into a dict
network_interface_ipv4_dict = network_interface_ipv4_instance.to_dict()
# create an instance of NetworkInterfaceIpv4 from a dict
network_interface_ipv4_from_dict = NetworkInterfaceIpv4.from_dict(network_interface_ipv4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


