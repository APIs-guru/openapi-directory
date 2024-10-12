# UpdateDeviceWirelessBluetoothSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major** | **int** | Desired major value of the beacon. If the value is set to null it will reset to Dashboard&#39;s automatically generated value. | [optional] 
**minor** | **int** | Desired minor value of the beacon. If the value is set to null it will reset to Dashboard&#39;s automatically generated value. | [optional] 
**uuid** | **str** | Desired UUID of the beacon. If the value is set to null it will reset to Dashboard&#39;s automatically generated value. | [optional] 

## Example

```python
from openapi_client.models.update_device_wireless_bluetooth_settings200_response import UpdateDeviceWirelessBluetoothSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceWirelessBluetoothSettings200Response from a JSON string
update_device_wireless_bluetooth_settings200_response_instance = UpdateDeviceWirelessBluetoothSettings200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceWirelessBluetoothSettings200Response.to_json())

# convert the object into a dict
update_device_wireless_bluetooth_settings200_response_dict = update_device_wireless_bluetooth_settings200_response_instance.to_dict()
# create an instance of UpdateDeviceWirelessBluetoothSettings200Response from a dict
update_device_wireless_bluetooth_settings200_response_from_dict = UpdateDeviceWirelessBluetoothSettings200Response.from_dict(update_device_wireless_bluetooth_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


