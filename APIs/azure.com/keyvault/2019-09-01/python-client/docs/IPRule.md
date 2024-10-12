# IPRule

A rule governing the accessibility of a vault from a specific ip address or ip range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | An IPv4 address range in CIDR notation, such as &#39;124.56.78.91&#39; (simple IP address) or &#39;124.56.78.0/24&#39; (all addresses that start with 124.56.78). | 

## Example

```python
from openapi_client.models.ip_rule import IPRule

# TODO update the JSON string below
json = "{}"
# create an instance of IPRule from a JSON string
ip_rule_instance = IPRule.from_json(json)
# print the JSON string representation of the object
print(IPRule.to_json())

# convert the object into a dict
ip_rule_dict = ip_rule_instance.to_dict()
# create an instance of IPRule from a dict
ip_rule_from_dict = IPRule.from_dict(ip_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


