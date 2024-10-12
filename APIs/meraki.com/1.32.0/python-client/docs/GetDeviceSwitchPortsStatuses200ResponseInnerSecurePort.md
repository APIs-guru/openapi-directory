# GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort

The Secure Port status of the port.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether Secure Port is currently active for this port. | [optional] 
**authentication_status** | **str** | The current Secure Port status. | [optional] 
**config_overrides** | [**GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides**](GetDeviceSwitchPortsStatuses200ResponseInnerSecurePortConfigOverrides.md) |  | [optional] 
**enabled** | **bool** | Whether Secure Port is turned on for this port. | [optional] 

## Example

```python
from openapi_client.models.get_device_switch_ports_statuses200_response_inner_secure_port import GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort from a JSON string
get_device_switch_ports_statuses200_response_inner_secure_port_instance = GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort.from_json(json)
# print the JSON string representation of the object
print(GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort.to_json())

# convert the object into a dict
get_device_switch_ports_statuses200_response_inner_secure_port_dict = get_device_switch_ports_statuses200_response_inner_secure_port_instance.to_dict()
# create an instance of GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort from a dict
get_device_switch_ports_statuses200_response_inner_secure_port_from_dict = GetDeviceSwitchPortsStatuses200ResponseInnerSecurePort.from_dict(get_device_switch_ports_statuses200_response_inner_secure_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


