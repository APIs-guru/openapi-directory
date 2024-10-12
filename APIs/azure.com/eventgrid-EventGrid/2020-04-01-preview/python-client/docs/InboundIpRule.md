# InboundIpRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action to perform based on the match or no match of the IpMask. | [optional] 
**ip_mask** | **str** | IP Address in CIDR notation e.g., 10.0.0.0/8. | [optional] 

## Example

```python
from openapi_client.models.inbound_ip_rule import InboundIpRule

# TODO update the JSON string below
json = "{}"
# create an instance of InboundIpRule from a JSON string
inbound_ip_rule_instance = InboundIpRule.from_json(json)
# print the JSON string representation of the object
print(InboundIpRule.to_json())

# convert the object into a dict
inbound_ip_rule_dict = inbound_ip_rule_instance.to_dict()
# create an instance of InboundIpRule from a dict
inbound_ip_rule_from_dict = InboundIpRule.from_dict(inbound_ip_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


