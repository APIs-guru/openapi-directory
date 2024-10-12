# UpdateNetworkWirelessSsidRequestLdapServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | IP address of your LDAP server. | 
**port** | **int** | UDP port the LDAP server listens on. | 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_ldap_servers_inner import UpdateNetworkWirelessSsidRequestLdapServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestLdapServersInner from a JSON string
update_network_wireless_ssid_request_ldap_servers_inner_instance = UpdateNetworkWirelessSsidRequestLdapServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestLdapServersInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_ldap_servers_inner_dict = update_network_wireless_ssid_request_ldap_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestLdapServersInner from a dict
update_network_wireless_ssid_request_ldap_servers_inner_from_dict = UpdateNetworkWirelessSsidRequestLdapServersInner.from_dict(update_network_wireless_ssid_request_ldap_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


