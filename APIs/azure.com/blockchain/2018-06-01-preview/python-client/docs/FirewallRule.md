# FirewallRule

Ip range for firewall rules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_ip_address** | **str** | Gets or sets the end IP address of the firewall rule range. | [optional] 
**rule_name** | **str** | Gets or sets the name of the firewall rules. | [optional] 
**start_ip_address** | **str** | Gets or sets the start IP address of the firewall rule range. | [optional] 

## Example

```python
from openapi_client.models.firewall_rule import FirewallRule

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallRule from a JSON string
firewall_rule_instance = FirewallRule.from_json(json)
# print the JSON string representation of the object
print(FirewallRule.to_json())

# convert the object into a dict
firewall_rule_dict = firewall_rule_instance.to_dict()
# create an instance of FirewallRule from a dict
firewall_rule_from_dict = FirewallRule.from_dict(firewall_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


