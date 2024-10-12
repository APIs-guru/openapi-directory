# GetNetworkSmDeviceWlanLists200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | When the Meraki record for the wlanList was created. | [optional] 
**id** | **str** | The Meraki managed Id of the wlanList record. | [optional] 
**xml** | **str** | An XML string containing the WLAN List for the device. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_wlan_lists200_response_inner import GetNetworkSmDeviceWlanLists200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDeviceWlanLists200ResponseInner from a JSON string
get_network_sm_device_wlan_lists200_response_inner_instance = GetNetworkSmDeviceWlanLists200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDeviceWlanLists200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_wlan_lists200_response_inner_dict = get_network_sm_device_wlan_lists200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDeviceWlanLists200ResponseInner from a dict
get_network_sm_device_wlan_lists200_response_inner_from_dict = GetNetworkSmDeviceWlanLists200ResponseInner.from_dict(get_network_sm_device_wlan_lists200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


