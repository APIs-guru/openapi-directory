# NetworkSecurityGroupRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** |  | 
**priority** | **int** | Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400. | 
**source_address_prefix** | **str** | Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400. | 
**source_port_ranges** | **List[str]** | Valid values are &#39;*&#39; (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can&#39;t overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *. | [optional] 

## Example

```python
from openapi_client.models.network_security_group_rule import NetworkSecurityGroupRule

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSecurityGroupRule from a JSON string
network_security_group_rule_instance = NetworkSecurityGroupRule.from_json(json)
# print the JSON string representation of the object
print(NetworkSecurityGroupRule.to_json())

# convert the object into a dict
network_security_group_rule_dict = network_security_group_rule_instance.to_dict()
# create an instance of NetworkSecurityGroupRule from a dict
network_security_group_rule_from_dict = NetworkSecurityGroupRule.from_dict(network_security_group_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


