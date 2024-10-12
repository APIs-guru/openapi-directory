# CreateNetworkGroupPolicyRequestBonjourForwarding

The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner]**](CreateNetworkGroupPolicyRequestBonjourForwardingRulesInner.md) | A list of the Bonjour forwarding rules for your group policy. If &#39;settings&#39; is set to &#39;custom&#39;, at least one rule must be specified. | [optional] 
**settings** | **str** | How Bonjour rules are applied. Can be &#39;network default&#39;, &#39;ignore&#39; or &#39;custom&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_bonjour_forwarding import CreateNetworkGroupPolicyRequestBonjourForwarding

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestBonjourForwarding from a JSON string
create_network_group_policy_request_bonjour_forwarding_instance = CreateNetworkGroupPolicyRequestBonjourForwarding.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestBonjourForwarding.to_json())

# convert the object into a dict
create_network_group_policy_request_bonjour_forwarding_dict = create_network_group_policy_request_bonjour_forwarding_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestBonjourForwarding from a dict
create_network_group_policy_request_bonjour_forwarding_from_dict = CreateNetworkGroupPolicyRequestBonjourForwarding.from_dict(create_network_group_policy_request_bonjour_forwarding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


