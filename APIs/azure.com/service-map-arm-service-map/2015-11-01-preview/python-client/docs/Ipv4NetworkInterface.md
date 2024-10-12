# Ipv4NetworkInterface

Describes an IPv4 network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | IPv4 address. | 
**subnet_mask** | **str** | IPv4 subnet mask. | [optional] [default to '255.255.255.255']

## Example

```python
from openapi_client.models.ipv4_network_interface import Ipv4NetworkInterface

# TODO update the JSON string below
json = "{}"
# create an instance of Ipv4NetworkInterface from a JSON string
ipv4_network_interface_instance = Ipv4NetworkInterface.from_json(json)
# print the JSON string representation of the object
print(Ipv4NetworkInterface.to_json())

# convert the object into a dict
ipv4_network_interface_dict = ipv4_network_interface_instance.to_dict()
# create an instance of Ipv4NetworkInterface from a dict
ipv4_network_interface_from_dict = Ipv4NetworkInterface.from_dict(ipv4_network_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


