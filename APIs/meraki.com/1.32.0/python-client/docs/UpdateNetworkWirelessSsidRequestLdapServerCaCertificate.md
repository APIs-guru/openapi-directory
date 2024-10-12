# UpdateNetworkWirelessSsidRequestLdapServerCaCertificate

The CA certificate used to sign the LDAP server's key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | The contents of the CA certificate. Must be in PEM or DER format. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_ldap_server_ca_certificate import UpdateNetworkWirelessSsidRequestLdapServerCaCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestLdapServerCaCertificate from a JSON string
update_network_wireless_ssid_request_ldap_server_ca_certificate_instance = UpdateNetworkWirelessSsidRequestLdapServerCaCertificate.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestLdapServerCaCertificate.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_ldap_server_ca_certificate_dict = update_network_wireless_ssid_request_ldap_server_ca_certificate_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestLdapServerCaCertificate from a dict
update_network_wireless_ssid_request_ldap_server_ca_certificate_from_dict = UpdateNetworkWirelessSsidRequestLdapServerCaCertificate.from_dict(update_network_wireless_ssid_request_ldap_server_ca_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


