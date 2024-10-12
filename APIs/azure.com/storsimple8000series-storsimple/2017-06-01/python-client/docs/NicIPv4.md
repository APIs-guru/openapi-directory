# NicIPv4

Details related to the IPv4 address configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controller0_ipv4_address** | **str** | The IPv4 address of Controller0. | [optional] 
**controller1_ipv4_address** | **str** | The IPv4 address of Controller1. | [optional] 
**ipv4_address** | **str** | The IPv4 address of the network adapter. | [optional] 
**ipv4_gateway** | **str** | The IPv4 gateway of the network adapter. | [optional] 
**ipv4_netmask** | **str** | The IPv4 netmask of the network adapter. | [optional] 

## Example

```python
from openapi_client.models.nic_ipv4 import NicIPv4

# TODO update the JSON string below
json = "{}"
# create an instance of NicIPv4 from a JSON string
nic_ipv4_instance = NicIPv4.from_json(json)
# print the JSON string representation of the object
print(NicIPv4.to_json())

# convert the object into a dict
nic_ipv4_dict = nic_ipv4_instance.to_dict()
# create an instance of NicIPv4 from a dict
nic_ipv4_from_dict = NicIPv4.from_dict(nic_ipv4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


