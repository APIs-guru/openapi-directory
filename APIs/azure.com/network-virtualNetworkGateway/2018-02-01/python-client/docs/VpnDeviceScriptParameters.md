# VpnDeviceScriptParameters

Vpn device configuration script generation parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_family** | **str** | The device family for the vpn device. | [optional] 
**firmware_version** | **str** | The firmware version for the vpn device. | [optional] 
**vendor** | **str** | The vendor for the vpn device. | [optional] 

## Example

```python
from openapi_client.models.vpn_device_script_parameters import VpnDeviceScriptParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VpnDeviceScriptParameters from a JSON string
vpn_device_script_parameters_instance = VpnDeviceScriptParameters.from_json(json)
# print the JSON string representation of the object
print(VpnDeviceScriptParameters.to_json())

# convert the object into a dict
vpn_device_script_parameters_dict = vpn_device_script_parameters_instance.to_dict()
# create an instance of VpnDeviceScriptParameters from a dict
vpn_device_script_parameters_from_dict = VpnDeviceScriptParameters.from_dict(vpn_device_script_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


