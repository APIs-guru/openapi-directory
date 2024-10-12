# GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides

The configuration overrides applied to this port when Secure Port is active.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_vlans** | **str** | The VLANs allowed on the . Only applicable to trunk ports. | [optional] 
**type** | **str** | The type of the  (&#39;trunk&#39; or &#39;access&#39;). | [optional] 
**vlan** | **int** | The VLAN of the . A null value will clear the value set for trunk ports. | [optional] 
**voice_vlan** | **int** | The voice VLAN of the . Only applicable to access ports. | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports_statuses200_response_inner_secure_port_config_overrides import GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides from a JSON string
get_device_switch_ports_statuses200_response_inner_secure_port_config_overrides_instance = GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides.to_json())

# convert the object into a dict
get_device_switch_ports_statuses200_response_inner_secure_port_config_overrides_dict = get_device_switch_ports_statuses200_response_inner_secure_port_config_overrides_instance.to_dict()
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides from a dict
get_device_switch_ports_statuses200_response_inner_secure_port_config_overrides_from_dict = GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides.from_dict(get_device_switch_ports_statuses200_response_inner_secure_port_config_overrides_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


