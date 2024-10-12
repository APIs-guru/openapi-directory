# CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description for your Bonjour forwarding rule. Optional. | [optional] 
**services** | **List[str]** | A list of Bonjour services. At least one service must be specified. Available services are &#39;All Services&#39;, &#39;AirPlay&#39;, &#39;AFP&#39;, &#39;BitTorrent&#39;, &#39;FTP&#39;, &#39;iChat&#39;, &#39;iTunes&#39;, &#39;Printers&#39;, &#39;Samba&#39;, &#39;Scanners&#39; and &#39;SSH&#39; | 
**vlan_id** | **str** | The ID of the service VLAN. Required. | 

## Example

```python
from openapi_client.models.create_network_group_policy_request_bonjour_forwarding_rules_inner import CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner from a JSON string
create_network_group_policy_request_bonjour_forwarding_rules_inner_instance = CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner.to_json())

# convert the object into a dict
create_network_group_policy_request_bonjour_forwarding_rules_inner_dict = create_network_group_policy_request_bonjour_forwarding_rules_inner_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner from a dict
create_network_group_policy_request_bonjour_forwarding_rules_inner_from_dict = CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner.from_dict(create_network_group_policy_request_bonjour_forwarding_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


