# CreateNetworkGroupPolicyRequestVlanTagging

The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | **str** | How VLAN tagging is applied. Can be &#39;network default&#39;, &#39;ignore&#39; or &#39;custom&#39;. | [optional] 
**vlan_id** | **str** | The ID of the vlan you want to tag. This only applies if &#39;settings&#39; is set to &#39;custom&#39;. | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_vlan_tagging import CreateNetworkGroupPolicyRequestVlanTagging

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestVlanTagging from a JSON string
create_network_group_policy_request_vlan_tagging_instance = CreateNetworkGroupPolicyRequestVlanTagging.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestVlanTagging.to_json())

# convert the object into a dict
create_network_group_policy_request_vlan_tagging_dict = create_network_group_policy_request_vlan_tagging_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestVlanTagging from a dict
create_network_group_policy_request_vlan_tagging_from_dict = CreateNetworkGroupPolicyRequestVlanTagging.from_dict(create_network_group_policy_request_vlan_tagging_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


