# NetworkInterface

This contains data about the network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | [**NetworkInterfaceIpv4**](NetworkInterfaceIpv4.md) |  | [optional] 
**ipv6** | [**NetworkInterfaceIpv6**](NetworkInterfaceIpv6.md) |  | [optional] 
**mac_address** | **str** | This is the MAC address of the interface. | [optional] 

## Example

```python
from openapi_client.models.network_interface import NetworkInterface

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterface from a JSON string
network_interface_instance = NetworkInterface.from_json(json)
# print the JSON string representation of the object
print(NetworkInterface.to_json())

# convert the object into a dict
network_interface_dict = network_interface_instance.to_dict()
# create an instance of NetworkInterface from a dict
network_interface_from_dict = NetworkInterface.from_dict(network_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


