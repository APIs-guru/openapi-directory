# UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | IP address of your Active Directory server. | 
**port** | **int** | (Optional) UDP port the Active Directory server listens on. By default, uses port 3268. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_active_directory_servers_inner import UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner from a JSON string
update_network_wireless_ssid_request_active_directory_servers_inner_instance = UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_active_directory_servers_inner_dict = update_network_wireless_ssid_request_active_directory_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner from a dict
update_network_wireless_ssid_request_active_directory_servers_inner_from_dict = UpdateNetworkWirelessSsidRequestActiveDirectoryServersInner.from_dict(update_network_wireless_ssid_request_active_directory_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


