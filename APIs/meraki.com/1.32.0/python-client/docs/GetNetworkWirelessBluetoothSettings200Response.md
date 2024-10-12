# GetNetworkWirelessBluetoothSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertising_enabled** | **bool** | Whether APs will advertise beacons. | [optional] 
**esl_enabled** | **bool** | Whether ESL is enabled on this network. | [optional] 
**major** | **int** | The major number to be used in the beacon identifier. Only valid in &#39;Non-unique&#39; mode. | [optional] 
**major_minor_assignment_mode** | **str** | The way major and minor number should be assigned to nodes in the network. (&#39;Unique&#39;, &#39;Non-unique&#39;) | [optional] 
**minor** | **int** | The minor number to be used in the beacon identifier. Only valid in &#39;Non-unique&#39; mode. | [optional] 
**scanning_enabled** | **bool** | Whether APs will scan for Bluetooth enabled clients. | [optional] 
**uuid** | **str** | The UUID to be used in the beacon identifier. | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_bluetooth_settings200_response import GetNetworkWirelessBluetoothSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessBluetoothSettings200Response from a JSON string
get_network_wireless_bluetooth_settings200_response_instance = GetNetworkWirelessBluetoothSettings200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessBluetoothSettings200Response.to_json())

# convert the object into a dict
get_network_wireless_bluetooth_settings200_response_dict = get_network_wireless_bluetooth_settings200_response_instance.to_dict()
# create an instance of GetNetworkWirelessBluetoothSettings200Response from a dict
get_network_wireless_bluetooth_settings200_response_from_dict = GetNetworkWirelessBluetoothSettings200Response.from_dict(get_network_wireless_bluetooth_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


