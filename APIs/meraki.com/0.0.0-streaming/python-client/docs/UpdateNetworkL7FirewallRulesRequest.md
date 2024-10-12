# UpdateNetworkL7FirewallRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateNetworkL7FirewallRulesRequestRulesInner]**](UpdateNetworkL7FirewallRulesRequestRulesInner.md) | An ordered array of the MX L7 firewall rules | [optional] 

## Example

```python
from openapi_client.models.update_network_l7_firewall_rules_request import UpdateNetworkL7FirewallRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkL7FirewallRulesRequest from a JSON string
update_network_l7_firewall_rules_request_instance = UpdateNetworkL7FirewallRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkL7FirewallRulesRequest.to_json())

# convert the object into a dict
update_network_l7_firewall_rules_request_dict = update_network_l7_firewall_rules_request_instance.to_dict()
# create an instance of UpdateNetworkL7FirewallRulesRequest from a dict
update_network_l7_firewall_rules_request_from_dict = UpdateNetworkL7FirewallRulesRequest.from_dict(update_network_l7_firewall_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


