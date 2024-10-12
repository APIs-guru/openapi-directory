# NetworkInterfaceIpv6

This contains the IPv6 address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | [**List[Ipv6Properties]**](Ipv6Properties.md) | This is the IP address | [optional] 

## Example

```python
from openapi_client.models.network_interface_ipv6 import NetworkInterfaceIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceIpv6 from a JSON string
network_interface_ipv6_instance = NetworkInterfaceIpv6.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceIpv6.to_json())

# convert the object into a dict
network_interface_ipv6_dict = network_interface_ipv6_instance.to_dict()
# create an instance of NetworkInterfaceIpv6 from a dict
network_interface_ipv6_from_dict = NetworkInterfaceIpv6.from_dict(network_interface_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


