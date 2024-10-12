# ForwardingRuleInfo

For display only. Metadata associated with a Compute Engine forwarding rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a Compute Engine forwarding rule. | [optional] 
**matched_port_range** | **str** | Port range defined in the forwarding rule that matches the test. | [optional] 
**matched_protocol** | **str** | Protocol defined in the forwarding rule that matches the test. | [optional] 
**network_uri** | **str** | Network URI. Only valid for Internal Load Balancer. | [optional] 
**target** | **str** | Target type of the forwarding rule. | [optional] 
**uri** | **str** | URI of a Compute Engine forwarding rule. | [optional] 
**vip** | **str** | VIP of the forwarding rule. | [optional] 

## Example

```python
from openapi_client.models.forwarding_rule_info import ForwardingRuleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ForwardingRuleInfo from a JSON string
forwarding_rule_info_instance = ForwardingRuleInfo.from_json(json)
# print the JSON string representation of the object
print(ForwardingRuleInfo.to_json())

# convert the object into a dict
forwarding_rule_info_dict = forwarding_rule_info_instance.to_dict()
# create an instance of ForwardingRuleInfo from a dict
forwarding_rule_info_from_dict = ForwardingRuleInfo.from_dict(forwarding_rule_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


