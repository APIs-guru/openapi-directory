# DeviceConfig

The device configuration. Eventually delivered to devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_data** | **bytearray** | The device configuration data. | [optional] 
**cloud_update_time** | **str** | [Output only] The time at which this configuration version was updated in Cloud IoT Core. This timestamp is set by the server. | [optional] 
**device_ack_time** | **str** | [Output only] The time at which Cloud IoT Core received the acknowledgment from the device, indicating that the device has received this configuration version. If this field is not present, the device has not yet acknowledged that it received this version. Note that when the config was sent to the device, many config versions may have been available in Cloud IoT Core while the device was disconnected, and on connection, only the latest version is sent to the device. Some versions may never be sent to the device, and therefore are never acknowledged. This timestamp is set by Cloud IoT Core. | [optional] 
**version** | **str** | [Output only] The version of this update. The version number is assigned by the server, and is always greater than 0 after device creation. The version must be 0 on the &#x60;CreateDevice&#x60; request if a &#x60;config&#x60; is specified; the response of &#x60;CreateDevice&#x60; will always have a value of 1. | [optional] 

## Example

```python
from openapi_client.models.device_config import DeviceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceConfig from a JSON string
device_config_instance = DeviceConfig.from_json(json)
# print the JSON string representation of the object
print(DeviceConfig.to_json())

# convert the object into a dict
device_config_dict = device_config_instance.to_dict()
# create an instance of DeviceConfig from a dict
device_config_from_dict = DeviceConfig.from_dict(device_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


