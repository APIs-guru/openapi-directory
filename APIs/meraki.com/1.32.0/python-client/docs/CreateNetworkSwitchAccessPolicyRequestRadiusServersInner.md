# CreateNetworkSwitchAccessPolicyRequestRadiusServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Public IP address of the RADIUS server | 
**port** | **int** | UDP port that the RADIUS server listens on for access requests | 
**secret** | **str** | RADIUS client shared secret | 

## Example

```python
from openapi_client.models.create_network_switch_access_policy_request_radius_servers_inner import CreateNetworkSwitchAccessPolicyRequestRadiusServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchAccessPolicyRequestRadiusServersInner from a JSON string
create_network_switch_access_policy_request_radius_servers_inner_instance = CreateNetworkSwitchAccessPolicyRequestRadiusServersInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchAccessPolicyRequestRadiusServersInner.to_json())

# convert the object into a dict
create_network_switch_access_policy_request_radius_servers_inner_dict = create_network_switch_access_policy_request_radius_servers_inner_instance.to_dict()
# create an instance of CreateNetworkSwitchAccessPolicyRequestRadiusServersInner from a dict
create_network_switch_access_policy_request_radius_servers_inner_from_dict = CreateNetworkSwitchAccessPolicyRequestRadiusServersInner.from_dict(create_network_switch_access_policy_request_radius_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


