# UpdateNetworkWirelessSsidRequestLdap

The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_distinguished_name** | **str** | The base distinguished name of users on the LDAP server. | [optional] 
**credentials** | [**UpdateNetworkWirelessSsidRequestLdapCredentials**](UpdateNetworkWirelessSsidRequestLdapCredentials.md) |  | [optional] 
**server_ca_certificate** | [**UpdateNetworkWirelessSsidRequestLdapServerCaCertificate**](UpdateNetworkWirelessSsidRequestLdapServerCaCertificate.md) |  | [optional] 
**servers** | [**List[UpdateNetworkWirelessSsidRequestLdapServersInner]**](UpdateNetworkWirelessSsidRequestLdapServersInner.md) | The LDAP servers to be used for authentication. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_ldap import UpdateNetworkWirelessSsidRequestLdap

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestLdap from a JSON string
update_network_wireless_ssid_request_ldap_instance = UpdateNetworkWirelessSsidRequestLdap.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestLdap.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_ldap_dict = update_network_wireless_ssid_request_ldap_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestLdap from a dict
update_network_wireless_ssid_request_ldap_from_dict = UpdateNetworkWirelessSsidRequestLdap.from_dict(update_network_wireless_ssid_request_ldap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


