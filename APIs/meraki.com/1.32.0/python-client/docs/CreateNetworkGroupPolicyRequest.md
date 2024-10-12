# CreateNetworkGroupPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | [**CreateNetworkGroupPolicyRequestBandwidth**](CreateNetworkGroupPolicyRequestBandwidth.md) |  | [optional] 
**bonjour_forwarding** | [**CreateNetworkGroupPolicyRequestBonjourForwarding**](CreateNetworkGroupPolicyRequestBonjourForwarding.md) |  | [optional] 
**content_filtering** | [**CreateNetworkGroupPolicyRequestContentFiltering**](CreateNetworkGroupPolicyRequestContentFiltering.md) |  | [optional] 
**firewall_and_traffic_shaping** | [**CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping**](CreateNetworkGroupPolicyRequestFirewallAndTrafficShaping.md) |  | [optional] 
**name** | **str** | The name for your group policy. Required. | 
**scheduling** | [**CreateNetworkGroupPolicyRequestScheduling**](CreateNetworkGroupPolicyRequestScheduling.md) |  | [optional] 
**splash_auth_settings** | **str** | Whether clients bound to your policy will bypass splash authorization or behave according to the network&#39;s rules. Can be one of &#39;network default&#39; or &#39;bypass&#39;. Only available if your network has a wireless configuration. | [optional] 
**vlan_tagging** | [**CreateNetworkGroupPolicyRequestVlanTagging**](CreateNetworkGroupPolicyRequestVlanTagging.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request import CreateNetworkGroupPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequest from a JSON string
create_network_group_policy_request_instance = CreateNetworkGroupPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequest.to_json())

# convert the object into a dict
create_network_group_policy_request_dict = create_network_group_policy_request_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequest from a dict
create_network_group_policy_request_from_dict = CreateNetworkGroupPolicyRequest.from_dict(create_network_group_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


