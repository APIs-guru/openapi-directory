# Ipv6NetworkInterface

Describes an IPv6 network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | IPv6 address. | 

## Example

```python
from openapi_client.models.ipv6_network_interface import Ipv6NetworkInterface

# TODO update the JSON string below
json = "{}"
# create an instance of Ipv6NetworkInterface from a JSON string
ipv6_network_interface_instance = Ipv6NetworkInterface.from_json(json)
# print the JSON string representation of the object
print(Ipv6NetworkInterface.to_json())

# convert the object into a dict
ipv6_network_interface_dict = ipv6_network_interface_instance.to_dict()
# create an instance of Ipv6NetworkInterface from a dict
ipv6_network_interface_from_dict = Ipv6NetworkInterface.from_dict(ipv6_network_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


