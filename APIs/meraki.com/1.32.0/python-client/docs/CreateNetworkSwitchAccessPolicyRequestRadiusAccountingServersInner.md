# CreateNetworkSwitchAccessPolicyRequestRadiusAccountingServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Public IP address of the RADIUS accounting server | 
**port** | **int** | UDP port that the RADIUS Accounting server listens on for access requests | 
**secret** | **str** | RADIUS client shared secret | 

## Example

```python
from openapi_client.models.create_network_switch_access_policy_request_radius_accounting_servers_inner import CreateNetworkSwitchAccessPolicyRequestRadiusAccountingServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchAccessPolicyRequestRadiusAccountingServersInner from a JSON string
create_network_switch_access_policy_request_radius_accounting_servers_inner_instance = CreateNetworkSwitchAccessPolicyRequestRadiusAccountingServersInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchAccessPolicyRequestRadiusAccountingServersInner.to_json())

# convert the object into a dict
create_network_switch_access_policy_request_radius_accounting_servers_inner_dict = create_network_switch_access_policy_request_radius_accounting_servers_inner_instance.to_dict()
# create an instance of CreateNetworkSwitchAccessPolicyRequestRadiusAccountingServersInner from a dict
create_network_switch_access_policy_request_radius_accounting_servers_inner_from_dict = CreateNetworkSwitchAccessPolicyRequestRadiusAccountingServersInner.from_dict(create_network_switch_access_policy_request_radius_accounting_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


