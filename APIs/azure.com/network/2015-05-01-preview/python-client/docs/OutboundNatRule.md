# OutboundNatRule

Outbound NAT pool of the loadbalancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**OutboundNatRulePropertiesFormat**](OutboundNatRulePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.outbound_nat_rule import OutboundNatRule

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundNatRule from a JSON string
outbound_nat_rule_instance = OutboundNatRule.from_json(json)
# print the JSON string representation of the object
print(OutboundNatRule.to_json())

# convert the object into a dict
outbound_nat_rule_dict = outbound_nat_rule_instance.to_dict()
# create an instance of OutboundNatRule from a dict
outbound_nat_rule_from_dict = OutboundNatRule.from_dict(outbound_nat_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


