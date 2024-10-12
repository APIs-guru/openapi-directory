# UpdateNetworkSwitchStpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rstp_enabled** | **bool** | The spanning tree protocol status in network | [optional] 
**stp_bridge_priority** | [**List[UpdateNetworkSwitchStpRequestStpBridgePriorityInner]**](UpdateNetworkSwitchStpRequestStpBridgePriorityInner.md) | STP bridge priority for switches/stacks or switch profiles. An empty array will clear the STP bridge priority settings. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_stp_request import UpdateNetworkSwitchStpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchStpRequest from a JSON string
update_network_switch_stp_request_instance = UpdateNetworkSwitchStpRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchStpRequest.to_json())

# convert the object into a dict
update_network_switch_stp_request_dict = update_network_switch_stp_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchStpRequest from a dict
update_network_switch_stp_request_from_dict = UpdateNetworkSwitchStpRequest.from_dict(update_network_switch_stp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


