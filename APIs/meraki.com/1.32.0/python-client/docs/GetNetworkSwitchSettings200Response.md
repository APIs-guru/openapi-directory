# GetNetworkSwitchSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**power_exceptions** | [**List[GetNetworkSwitchSettings200ResponsePowerExceptionsInner]**](GetNetworkSwitchSettings200ResponsePowerExceptionsInner.md) | Exceptions on a per switch basis to \&quot;useCombinedPower\&quot; | [optional] 
**use_combined_power** | **bool** | The use Combined Power as the default behavior of secondary power supplies on supported devices. | [optional] 
**vlan** | **int** | Management VLAN | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_settings200_response import GetNetworkSwitchSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchSettings200Response from a JSON string
get_network_switch_settings200_response_instance = GetNetworkSwitchSettings200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchSettings200Response.to_json())

# convert the object into a dict
get_network_switch_settings200_response_dict = get_network_switch_settings200_response_instance.to_dict()
# create an instance of GetNetworkSwitchSettings200Response from a dict
get_network_switch_settings200_response_from_dict = GetNetworkSwitchSettings200Response.from_dict(get_network_switch_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


