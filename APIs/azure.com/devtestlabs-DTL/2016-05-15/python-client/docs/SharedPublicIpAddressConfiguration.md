# SharedPublicIpAddressConfiguration

Properties of a virtual machine that determine how it is connected to a load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_nat_rules** | [**List[InboundNatRule]**](InboundNatRule.md) | The incoming NAT rules | [optional] 

## Example

```python
from openapi_client.models.shared_public_ip_address_configuration import SharedPublicIpAddressConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SharedPublicIpAddressConfiguration from a JSON string
shared_public_ip_address_configuration_instance = SharedPublicIpAddressConfiguration.from_json(json)
# print the JSON string representation of the object
print(SharedPublicIpAddressConfiguration.to_json())

# convert the object into a dict
shared_public_ip_address_configuration_dict = shared_public_ip_address_configuration_instance.to_dict()
# create an instance of SharedPublicIpAddressConfiguration from a dict
shared_public_ip_address_configuration_from_dict = SharedPublicIpAddressConfiguration.from_dict(shared_public_ip_address_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


