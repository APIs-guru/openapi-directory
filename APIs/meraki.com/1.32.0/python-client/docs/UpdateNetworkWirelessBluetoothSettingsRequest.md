# UpdateNetworkWirelessBluetoothSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertising_enabled** | **bool** | Whether APs will advertise beacons. | [optional] 
**major** | **int** | The major number to be used in the beacon identifier. Only valid in &#39;Non-unique&#39; mode. | [optional] 
**major_minor_assignment_mode** | **str** | The way major and minor number should be assigned to nodes in the network. (&#39;Unique&#39;, &#39;Non-unique&#39;) | [optional] 
**minor** | **int** | The minor number to be used in the beacon identifier. Only valid in &#39;Non-unique&#39; mode. | [optional] 
**scanning_enabled** | **bool** | Whether APs will scan for Bluetooth enabled clients. | [optional] 
**uuid** | **str** | The UUID to be used in the beacon identifier. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_bluetooth_settings_request import UpdateNetworkWirelessBluetoothSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessBluetoothSettingsRequest from a JSON string
update_network_wireless_bluetooth_settings_request_instance = UpdateNetworkWirelessBluetoothSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessBluetoothSettingsRequest.to_json())

# convert the object into a dict
update_network_wireless_bluetooth_settings_request_dict = update_network_wireless_bluetooth_settings_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessBluetoothSettingsRequest from a dict
update_network_wireless_bluetooth_settings_request_from_dict = UpdateNetworkWirelessBluetoothSettingsRequest.from_dict(update_network_wireless_bluetooth_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


