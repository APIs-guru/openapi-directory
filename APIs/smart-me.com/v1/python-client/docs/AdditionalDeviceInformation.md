# AdditionalDeviceInformation

Additional Information For a device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_meter_serial_number** | **str** | An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to. | [optional] 
**firmware_version** | **int** | The Firmware Version of a Meter | [optional] 
**hardware_version** | **int** | The Hardware Version of a Meter. | [optional] 
**id** | **str** | The ID of the device | [optional] 
**network_connection** | **str** | The mode how the device is connected to the network. Valid values are:              wifi, gprs, ltecatm1, ltenbiot, meshmobile, meshwifi | [optional] 
**network_connection_rssi** | **int** | The connection RSSI value (0 is bad, 100 is best) | [optional] 

## Example

```python
from openapi_client.models.additional_device_information import AdditionalDeviceInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalDeviceInformation from a JSON string
additional_device_information_instance = AdditionalDeviceInformation.from_json(json)
# print the JSON string representation of the object
print(AdditionalDeviceInformation.to_json())

# convert the object into a dict
additional_device_information_dict = additional_device_information_instance.to_dict()
# create an instance of AdditionalDeviceInformation from a dict
additional_device_information_from_dict = AdditionalDeviceInformation.from_dict(additional_device_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


