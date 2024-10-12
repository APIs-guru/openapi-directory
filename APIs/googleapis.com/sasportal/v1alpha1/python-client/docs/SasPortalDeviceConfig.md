# SasPortalDeviceConfig

Information about the device configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**air_interface** | [**SasPortalDeviceAirInterface**](SasPortalDeviceAirInterface.md) |  | [optional] 
**call_sign** | **str** | The call sign of the device operator. | [optional] 
**category** | **str** | FCC category of the device. | [optional] 
**installation_params** | [**SasPortalInstallationParams**](SasPortalInstallationParams.md) |  | [optional] 
**is_signed** | **bool** | Output only. Whether the configuration has been signed by a CPI. | [optional] 
**measurement_capabilities** | **List[str]** | Measurement reporting capabilities of the device. | [optional] 
**model** | [**SasPortalDeviceModel**](SasPortalDeviceModel.md) |  | [optional] 
**state** | **str** | State of the configuration. | [optional] 
**update_time** | **str** | Output only. The last time the device configuration was edited. | [optional] 
**user_id** | **str** | The identifier of a device user. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_device_config import SasPortalDeviceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalDeviceConfig from a JSON string
sas_portal_device_config_instance = SasPortalDeviceConfig.from_json(json)
# print the JSON string representation of the object
print(SasPortalDeviceConfig.to_json())

# convert the object into a dict
sas_portal_device_config_dict = sas_portal_device_config_instance.to_dict()
# create an instance of SasPortalDeviceConfig from a dict
sas_portal_device_config_from_dict = SasPortalDeviceConfig.from_dict(sas_portal_device_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


