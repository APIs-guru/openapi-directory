# ForwardingRule

A forwarding rule is a mapping of a `domain` to `name_servers`. This mapping allows VMware Engine to resolve domains for attached private clouds by forwarding DNS requests for a given domain to the specified nameservers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Required. Domain used to resolve a &#x60;name_servers&#x60; list. | [optional] 
**name_servers** | **List[str]** | Required. List of DNS servers to use for domain resolution | [optional] 

## Example

```python
from openapi_client.models.forwarding_rule import ForwardingRule

# TODO update the JSON string below
json = "{}"
# create an instance of ForwardingRule from a JSON string
forwarding_rule_instance = ForwardingRule.from_json(json)
# print the JSON string representation of the object
print(ForwardingRule.to_json())

# convert the object into a dict
forwarding_rule_dict = forwarding_rule_instance.to_dict()
# create an instance of ForwardingRule from a dict
forwarding_rule_from_dict = ForwardingRule.from_dict(forwarding_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


