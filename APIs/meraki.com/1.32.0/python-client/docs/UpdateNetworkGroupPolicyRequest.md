# UpdateNetworkGroupPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | [**CreateNetworkGroupPolicyRequestBandwidth**](CreateNetworkGroupPolicyRequestBandwidth.md) |  | [optional] 
**bonjour_forwarding** | [**CreateNetworkGroupPolicyRequestBonjourForwarding**](CreateNetworkGroupPolicyRequestBonjourForwarding.md) |  | [optional] 
**content_filtering** | [**CreateNetworkGroupPolicyRequestContentFiltering**](CreateNetworkGroupPolicyRequestContentFiltering.md) |  | [optional] 
**firewall_and_traffic_shaping** | [**CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping**](CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping.md) |  | [optional] 
**name** | **str** | The name for your group policy. | [optional] 
**scheduling** | [**CreateNetworkGroupPolicyRequestScheduling**](CreateNetworkGroupPolicyRequestScheduling.md) |  | [optional] 
**splash_auth_settings** | **str** | Whether clients bound to your policy will bypass splash authorization or behave according to the network&#39;s rules. Can be one of &#39;network default&#39; or &#39;bypass&#39;. Only available if your network has a wireless configuration. | [optional] 
**vlan_tagging** | [**CreateNetworkGroupPolicyRequestVlanTagging**](CreateNetworkGroupPolicyRequestVlanTagging.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_group_policy_request import UpdateNetworkGroupPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkGroupPolicyRequest from a JSON string
update_network_group_policy_request_instance = UpdateNetworkGroupPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkGroupPolicyRequest.to_json())

# convert the object into a dict
update_network_group_policy_request_dict = update_network_group_policy_request_instance.to_dict()
# create an instance of UpdateNetworkGroupPolicyRequest from a dict
update_network_group_policy_request_from_dict = UpdateNetworkGroupPolicyRequest.from_dict(update_network_group_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


