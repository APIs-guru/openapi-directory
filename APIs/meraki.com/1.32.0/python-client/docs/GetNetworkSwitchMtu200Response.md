# GetNetworkSwitchMtu200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_mtu_size** | **int** | MTU size for the entire network. Default value is 9578. | [optional] 
**overrides** | [**List[GetNetworkSwitchMtu200ResponseOverridesInner]**](GetNetworkSwitchMtu200ResponseOverridesInner.md) | Override MTU size for individual switches or switch profiles.       An empty array will clear overrides. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_mtu200_response import GetNetworkSwitchMtu200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchMtu200Response from a JSON string
get_network_switch_mtu200_response_instance = GetNetworkSwitchMtu200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchMtu200Response.to_json())

# convert the object into a dict
get_network_switch_mtu200_response_dict = get_network_switch_mtu200_response_instance.to_dict()
# create an instance of GetNetworkSwitchMtu200Response from a dict
get_network_switch_mtu200_response_from_dict = GetNetworkSwitchMtu200Response.from_dict(get_network_switch_mtu200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


