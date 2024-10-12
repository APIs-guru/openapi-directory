# GetNetworkSwitchSettings200ResponsePowerExceptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**power_type** | **str** | Per switch exception (combined, redundant, useNetworkSetting) | [optional] 
**serial** | **str** | Serial number of the switch | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_settings200_response_power_exceptions_inner import GetNetworkSwitchSettings200ResponsePowerExceptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchSettings200ResponsePowerExceptionsInner from a JSON string
get_network_switch_settings200_response_power_exceptions_inner_instance = GetNetworkSwitchSettings200ResponsePowerExceptionsInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchSettings200ResponsePowerExceptionsInner.to_json())

# convert the object into a dict
get_network_switch_settings200_response_power_exceptions_inner_dict = get_network_switch_settings200_response_power_exceptions_inner_instance.to_dict()
# create an instance of GetNetworkSwitchSettings200ResponsePowerExceptionsInner from a dict
get_network_switch_settings200_response_power_exceptions_inner_from_dict = GetNetworkSwitchSettings200ResponsePowerExceptionsInner.from_dict(get_network_switch_settings200_response_power_exceptions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


