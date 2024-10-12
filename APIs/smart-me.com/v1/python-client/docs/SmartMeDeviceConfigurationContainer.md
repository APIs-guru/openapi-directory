# SmartMeDeviceConfigurationContainer

API Container class for the meter configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_encryption_key** | **str** | The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules) | [optional] 
**device_pin_code** | **str** | PIN code to enter on a external meter (e.g. for the FNN meters) | [optional] 
**dns_update_state** | **str** | Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS | [optional] 
**enable_modbus_tcp** | **bool** | Enables or disables Modbus TCP (if the meter supports it). | [optional] 
**id** | **str** | The ID of the device | [optional] 
**input_configuration** | [**List[InputConfigurationContainer]**](InputConfigurationContainer.md) | The configuration for the intput outputs | [optional] 
**output_configuration** | [**List[OutputConfigurationContainer]**](OutputConfigurationContainer.md) | The configuration for the external outputs | [optional] 
**show_reactive_energy** | **bool** | Shows the reactive energy values (if the meter supports it). | [optional] 
**switch_configuration** | [**List[SwitchConfigurationContainer]**](SwitchConfigurationContainer.md) | The configuration for the phase switches | [optional] 
**upload_interval** | **str** | Number of seconds the device will upload the data. For smaller values maybe a professional license is needed. | [optional] 

## Example

```python
from openapi_client.models.smart_me_device_configuration_container import SmartMeDeviceConfigurationContainer

# TODO update the JSON string below
json = "{}"
# create an instance of SmartMeDeviceConfigurationContainer from a JSON string
smart_me_device_configuration_container_instance = SmartMeDeviceConfigurationContainer.from_json(json)
# print the JSON string representation of the object
print(SmartMeDeviceConfigurationContainer.to_json())

# convert the object into a dict
smart_me_device_configuration_container_dict = smart_me_device_configuration_container_instance.to_dict()
# create an instance of SmartMeDeviceConfigurationContainer from a dict
smart_me_device_configuration_container_from_dict = SmartMeDeviceConfigurationContainer.from_dict(smart_me_device_configuration_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


