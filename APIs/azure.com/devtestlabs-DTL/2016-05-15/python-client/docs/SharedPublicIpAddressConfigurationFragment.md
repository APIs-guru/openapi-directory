# SharedPublicIpAddressConfigurationFragment

Properties of a virtual machine that determine how it is connected to a load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_nat_rules** | [**List[InboundNatRuleFragment]**](InboundNatRuleFragment.md) | The incoming NAT rules | [optional] 

## Example

```python
from openapi_client.models.shared_public_ip_address_configuration_fragment import SharedPublicIpAddressConfigurationFragment

# TODO update the JSON string below
json = "{}"
# create an instance of SharedPublicIpAddressConfigurationFragment from a JSON string
shared_public_ip_address_configuration_fragment_instance = SharedPublicIpAddressConfigurationFragment.from_json(json)
# print the JSON string representation of the object
print(SharedPublicIpAddressConfigurationFragment.to_json())

# convert the object into a dict
shared_public_ip_address_configuration_fragment_dict = shared_public_ip_address_configuration_fragment_instance.to_dict()
# create an instance of SharedPublicIpAddressConfigurationFragment from a dict
shared_public_ip_address_configuration_fragment_from_dict = SharedPublicIpAddressConfigurationFragment.from_dict(shared_public_ip_address_configuration_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


