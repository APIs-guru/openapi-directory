# GetDeviceWirelessBluetoothSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major** | **int** | Desired major value of the beacon. If the value is set to null it will reset to Dashboard&#39;s automatically generated value. | [optional] 
**minor** | **int** | Desired minor value of the beacon. If the value is set to null it will reset to Dashboard&#39;s automatically generated value. | [optional] 
**uuid** | **str** | Desired UUID of the beacon. If the value is set to null it will reset to Dashboard&#39;s automatically generated value. | [optional] 

## Example

```python
from openapi_client.models.get_device_wireless_bluetooth_settings200_response import GetDeviceWirelessBluetoothSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeviceWirelessBluetoothSettings200Response from a JSON string
get_device_wireless_bluetooth_settings200_response_instance = GetDeviceWirelessBluetoothSettings200Response.from_json(json)
# print the JSON string representation of the object
print(GetDeviceWirelessBluetoothSettings200Response.to_json())

# convert the object into a dict
get_device_wireless_bluetooth_settings200_response_dict = get_device_wireless_bluetooth_settings200_response_instance.to_dict()
# create an instance of GetDeviceWirelessBluetoothSettings200Response from a dict
get_device_wireless_bluetooth_settings200_response_from_dict = GetDeviceWirelessBluetoothSettings200Response.from_dict(get_device_wireless_bluetooth_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


