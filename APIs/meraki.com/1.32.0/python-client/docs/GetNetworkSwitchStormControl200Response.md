# GetNetworkSwitchStormControl200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broadcast_threshold** | **int** | Broadcast threshold. | [optional] 
**multicast_threshold** | **int** | Multicast threshold. | [optional] 
**unknown_unicast_threshold** | **int** | Unknown Unicast threshold. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_storm_control200_response import GetNetworkSwitchStormControl200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchStormControl200Response from a JSON string
get_network_switch_storm_control200_response_instance = GetNetworkSwitchStormControl200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchStormControl200Response.to_json())

# convert the object into a dict
get_network_switch_storm_control200_response_dict = get_network_switch_storm_control200_response_instance.to_dict()
# create an instance of GetNetworkSwitchStormControl200Response from a dict
get_network_switch_storm_control200_response_from_dict = GetNetworkSwitchStormControl200Response.from_dict(get_network_switch_storm_control200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


