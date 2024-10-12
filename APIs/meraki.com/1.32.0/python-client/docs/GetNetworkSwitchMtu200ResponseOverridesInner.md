# GetNetworkSwitchMtu200ResponseOverridesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mtu_size** | **int** | MTU size for the switches or switch profiles. | 
**switch_profiles** | **List[str]** | List of switch profile IDs. Applicable only for template network. | [optional] 
**switches** | **List[str]** | List of switch serials. Applicable only for switch network. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_mtu200_response_overrides_inner import GetNetworkSwitchMtu200ResponseOverridesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchMtu200ResponseOverridesInner from a JSON string
get_network_switch_mtu200_response_overrides_inner_instance = GetNetworkSwitchMtu200ResponseOverridesInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchMtu200ResponseOverridesInner.to_json())

# convert the object into a dict
get_network_switch_mtu200_response_overrides_inner_dict = get_network_switch_mtu200_response_overrides_inner_instance.to_dict()
# create an instance of GetNetworkSwitchMtu200ResponseOverridesInner from a dict
get_network_switch_mtu200_response_overrides_inner_from_dict = GetNetworkSwitchMtu200ResponseOverridesInner.from_dict(get_network_switch_mtu200_response_overrides_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


