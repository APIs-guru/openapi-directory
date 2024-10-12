# WipeNetworkSmDevicesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the device to be wiped. | [optional] 
**pin** | **int** | The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices. | [optional] 
**serial** | **str** | The serial of the device to be wiped. | [optional] 
**wifi_mac** | **str** | The wifiMac of the device to be wiped. | [optional] 

## Example

```python
from openapi_client.models.wipe_network_sm_devices_request import WipeNetworkSmDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WipeNetworkSmDevicesRequest from a JSON string
wipe_network_sm_devices_request_instance = WipeNetworkSmDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(WipeNetworkSmDevicesRequest.to_json())

# convert the object into a dict
wipe_network_sm_devices_request_dict = wipe_network_sm_devices_request_instance.to_dict()
# create an instance of WipeNetworkSmDevicesRequest from a dict
wipe_network_sm_devices_request_from_dict = WipeNetworkSmDevicesRequest.from_dict(wipe_network_sm_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


