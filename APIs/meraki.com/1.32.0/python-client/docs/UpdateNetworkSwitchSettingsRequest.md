# UpdateNetworkSwitchSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**power_exceptions** | [**List[UpdateNetworkSwitchSettingsRequestPowerExceptionsInner]**](UpdateNetworkSwitchSettingsRequestPowerExceptionsInner.md) | Exceptions on a per switch basis to \&quot;useCombinedPower\&quot; | [optional] 
**use_combined_power** | **bool** | The use Combined Power as the default behavior of secondary power supplies on supported devices. | [optional] 
**vlan** | **int** | Management VLAN | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_settings_request import UpdateNetworkSwitchSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchSettingsRequest from a JSON string
update_network_switch_settings_request_instance = UpdateNetworkSwitchSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchSettingsRequest.to_json())

# convert the object into a dict
update_network_switch_settings_request_dict = update_network_switch_settings_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchSettingsRequest from a dict
update_network_switch_settings_request_from_dict = UpdateNetworkSwitchSettingsRequest.from_dict(update_network_switch_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


