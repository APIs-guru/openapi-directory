# UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials

(Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logon_name** | **str** | The logon name of the Active Directory account. | [optional] 
**password** | **str** | The password to the Active Directory user account. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_active_directory_credentials import UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials from a JSON string
update_network_wireless_ssid_request_active_directory_credentials_instance = UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_active_directory_credentials_dict = update_network_wireless_ssid_request_active_directory_credentials_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials from a dict
update_network_wireless_ssid_request_active_directory_credentials_from_dict = UpdateNetworkWirelessSsidRequestActiveDirectoryCredentials.from_dict(update_network_wireless_ssid_request_active_directory_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


