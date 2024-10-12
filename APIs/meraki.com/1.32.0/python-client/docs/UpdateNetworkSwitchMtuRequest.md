# UpdateNetworkSwitchMtuRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_mtu_size** | **int** | MTU size for the entire network. Default value is 9578. | [optional] 
**overrides** | [**List[GetNetworkSwitchMtu200ResponseOverridesInner]**](GetNetworkSwitchMtu200ResponseOverridesInner.md) | Override MTU size for individual switches or switch profiles. An empty array will clear overrides. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_mtu_request import UpdateNetworkSwitchMtuRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchMtuRequest from a JSON string
update_network_switch_mtu_request_instance = UpdateNetworkSwitchMtuRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchMtuRequest.to_json())

# convert the object into a dict
update_network_switch_mtu_request_dict = update_network_switch_mtu_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchMtuRequest from a dict
update_network_switch_mtu_request_from_dict = UpdateNetworkSwitchMtuRequest.from_dict(update_network_switch_mtu_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


