# GetNetworkSmDeviceDesktopLogs200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcp_server** | **str** | The IP address of the DCHP Server. | [optional] 
**dns_server** | **str** | The DNS Server during the connection. | [optional] 
**gateway** | **str** | The gateway IP the device was connected to. | [optional] 
**ip** | **str** | The IP of the device during connection. | [optional] 
**measured_at** | **str** | The time the data was measured at. | [optional] 
**network_device** | **str** | The network device for the device used for connection. | [optional] 
**network_driver** | **str** | The network driver for the device. | [optional] 
**network_mtu** | **str** | The network max transmission unit. | [optional] 
**public_ip** | **str** | The public IP address of the device. | [optional] 
**subnet** | **str** | The subnet of the device connection. | [optional] 
**ts** | **str** | The time the connection was logged. | [optional] 
**user** | **str** | The user during connection. | [optional] 
**wifi_auth** | **str** | The type of authentication used by the SSID. | [optional] 
**wifi_bssid** | **str** | The MAC of the access point the device is connected to. | [optional] 
**wifi_channel** | **str** | Channel through which the connection is routing. | [optional] 
**wifi_noise** | **str** | The wireless signal power level received by the device. | [optional] 
**wifi_rssi** | **str** | The Received Signal Strength Indicator for the device. | [optional] 
**wifi_ssid** | **str** | The name of the network the device is connected to. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_desktop_logs200_response_inner import GetNetworkSmDeviceDesktopLogs200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceDesktopLogs200ResponseInner from a JSON string
get_network_sm_device_desktop_logs200_response_inner_instance = GetNetworkSmDeviceDesktopLogs200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceDesktopLogs200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_desktop_logs200_response_inner_dict = get_network_sm_device_desktop_logs200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceDesktopLogs200ResponseInner from a dict
get_network_sm_device_desktop_logs200_response_inner_from_dict = GetNetworkSmDeviceDesktopLogs200ResponseInner.from_dict(get_network_sm_device_desktop_logs200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


