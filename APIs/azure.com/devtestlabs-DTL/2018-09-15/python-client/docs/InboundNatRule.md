# InboundNatRule

A rule for NAT - exposing a VM's port (backendPort) on the public IP address using a load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_port** | **int** | The port to which the external traffic will be redirected. | [optional] 
**frontend_port** | **int** | The external endpoint port of the inbound connection. Possible values range between 1 and 65535, inclusive. If unspecified, a value will be allocated automatically. | [optional] 
**transport_protocol** | **str** | The transport protocol for the endpoint. | [optional] 

## Example

```python
from openapi_client.models.inbound_nat_rule import InboundNatRule

# TODO update the JSON string below
json = "{}"
# create an instance of InboundNatRule from a JSON string
inbound_nat_rule_instance = InboundNatRule.from_json(json)
# print the JSON string representation of the object
print(InboundNatRule.to_json())

# convert the object into a dict
inbound_nat_rule_dict = inbound_nat_rule_instance.to_dict()
# create an instance of InboundNatRule from a dict
inbound_nat_rule_from_dict = InboundNatRule.from_dict(inbound_nat_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


