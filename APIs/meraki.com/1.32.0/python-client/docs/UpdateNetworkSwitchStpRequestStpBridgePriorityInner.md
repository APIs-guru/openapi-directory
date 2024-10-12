# UpdateNetworkSwitchStpRequestStpBridgePriorityInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stacks** | **List[str]** | List of stack IDs | [optional] 
**stp_priority** | **int** | STP priority for switch, stacks, or switch profiles | 
**switch_profiles** | **List[str]** | List of switch profile IDs | [optional] 
**switches** | **List[str]** | List of switch serial numbers | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_stp_request_stp_bridge_priority_inner import UpdateNetworkSwitchStpRequestStpBridgePriorityInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchStpRequestStpBridgePriorityInner from a JSON string
update_network_switch_stp_request_stp_bridge_priority_inner_instance = UpdateNetworkSwitchStpRequestStpBridgePriorityInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchStpRequestStpBridgePriorityInner.to_json())

# convert the object into a dict
update_network_switch_stp_request_stp_bridge_priority_inner_dict = update_network_switch_stp_request_stp_bridge_priority_inner_instance.to_dict()
# create an instance of UpdateNetworkSwitchStpRequestStpBridgePriorityInner from a dict
update_network_switch_stp_request_stp_bridge_priority_inner_from_dict = UpdateNetworkSwitchStpRequestStpBridgePriorityInner.from_dict(update_network_switch_stp_request_stp_bridge_priority_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


