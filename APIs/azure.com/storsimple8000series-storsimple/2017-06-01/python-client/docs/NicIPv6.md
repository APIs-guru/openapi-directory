# NicIPv6

Details related to the IPv6 address configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controller0_ipv6_address** | **str** | The IPv6 address of Controller0. | [optional] 
**controller1_ipv6_address** | **str** | The IPv6 address of Controller1. | [optional] 
**ipv6_address** | **str** | The IPv6 address of the network adapter. | [optional] 
**ipv6_gateway** | **str** | The IPv6 gateway of the network adapter. | [optional] 
**ipv6_prefix** | **str** | The IPv6 prefix of the network adapter. | [optional] 

## Example

```python
from openapi_client.models.nic_ipv6 import NicIPv6

# TODO update the JSON string below
json = "{}"
# create an instance of NicIPv6 from a JSON string
nic_ipv6_instance = NicIPv6.from_json(json)
# print the JSON string representation of the object
print(NicIPv6.to_json())

# convert the object into a dict
nic_ipv6_dict = nic_ipv6_instance.to_dict()
# create an instance of NicIPv6 from a dict
nic_ipv6_from_dict = NicIPv6.from_dict(nic_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


