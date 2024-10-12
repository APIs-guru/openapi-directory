# GetNetworkSmDevices200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Meraki Id of the device record. | [optional] 
**ip** | **str** | The IP address of the device. | [optional] 
**name** | **str** | The name of the device. | [optional] 
**notes** | **str** | Notes associated with the device. | [optional] 
**os_name** | **str** | The name of the device OS. | [optional] 
**serial** | **str** | The device serial. | [optional] 
**serial_number** | **str** | The device serial number. | [optional] 
**ssid** | **str** | The name of the SSID the device was last connected to. | [optional] 
**system_model** | **str** | The device model. | [optional] 
**tags** | **List[str]** | An array of tags associated with the device. | [optional] 
**uuid** | **str** | The UUID of the device. | [optional] 
**wifi_mac** | **str** | The MAC of the device. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_devices200_response_inner import GetNetworkSmDevices200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDevices200ResponseInner from a JSON string
get_network_sm_devices200_response_inner_instance = GetNetworkSmDevices200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDevices200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_devices200_response_inner_dict = get_network_sm_devices200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDevices200ResponseInner from a dict
get_network_sm_devices200_response_inner_from_dict = GetNetworkSmDevices200ResponseInner.from_dict(get_network_sm_devices200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


