# UpdateNetworkWirelessSsidRequestLdapCredentials

(Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distinguished_name** | **str** | The distinguished name of the LDAP user account (example: cn&#x3D;user,dc&#x3D;meraki,dc&#x3D;com). | [optional] 
**password** | **str** | The password of the LDAP user account. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_ldap_credentials import UpdateNetworkWirelessSsidRequestLdapCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestLdapCredentials from a JSON string
update_network_wireless_ssid_request_ldap_credentials_instance = UpdateNetworkWirelessSsidRequestLdapCredentials.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestLdapCredentials.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_ldap_credentials_dict = update_network_wireless_ssid_request_ldap_credentials_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestLdapCredentials from a dict
update_network_wireless_ssid_request_ldap_credentials_from_dict = UpdateNetworkWirelessSsidRequestLdapCredentials.from_dict(update_network_wireless_ssid_request_ldap_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


