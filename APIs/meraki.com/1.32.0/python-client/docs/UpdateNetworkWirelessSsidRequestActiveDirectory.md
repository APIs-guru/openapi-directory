# UpdateNetworkWirelessSsidRequestActiveDirectory

The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials**](UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials.md) |  | [optional] 
**servers** | [**List[UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner]**](UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner.md) | The Active Directory servers to be used for authentication. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_active_directory import UpdateNetworkWirelessSsidRequestActiveDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestActiveDirectory from a JSON string
update_network_wireless_ssid_request_active_directory_instance = UpdateNetworkWirelessSsidRequestActiveDirectory.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestActiveDirectory.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_active_directory_dict = update_network_wireless_ssid_request_active_directory_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestActiveDirectory from a dict
update_network_wireless_ssid_request_active_directory_from_dict = UpdateNetworkWirelessSsidRequestActiveDirectory.from_dict(update_network_wireless_ssid_request_active_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


