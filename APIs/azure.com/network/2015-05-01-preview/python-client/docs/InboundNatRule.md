# InboundNatRule

Inbound NAT rule of the loadbalancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**InboundNatRulePropertiesFormat**](InboundNatRulePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

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


