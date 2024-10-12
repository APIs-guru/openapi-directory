# FirewallPolicyListResult

Response for ListFirewallPolicies API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[FirewallPolicy]**](FirewallPolicy.md) | List of Firewall Policies in a resource group. | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_list_result import FirewallPolicyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyListResult from a JSON string
firewall_policy_list_result_instance = FirewallPolicyListResult.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyListResult.to_json())

# convert the object into a dict
firewall_policy_list_result_dict = firewall_policy_list_result_instance.to_dict()
# create an instance of FirewallPolicyListResult from a dict
firewall_policy_list_result_from_dict = FirewallPolicyListResult.from_dict(firewall_policy_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


