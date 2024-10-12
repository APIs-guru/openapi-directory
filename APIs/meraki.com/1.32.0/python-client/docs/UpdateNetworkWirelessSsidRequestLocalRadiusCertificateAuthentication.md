# UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication

The current setting for certificate verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_root_ca_certificate** | [**UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthenticationClientRootCaCertificate**](UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthenticationClientRootCaCertificate.md) |  | [optional] 
**enabled** | **bool** | Whether or not to use EAP-TLS certificate-based authentication to validate wireless clients. | [optional] 
**ocsp_responder_url** | **str** | (Optional) The URL of the OCSP responder to verify client certificate status. | [optional] 
**use_ldap** | **bool** | Whether or not to verify the certificate with LDAP. | [optional] 
**use_ocsp** | **bool** | Whether or not to verify the certificate with OCSP. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_local_radius_certificate_authentication import UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication from a JSON string
update_network_wireless_ssid_request_local_radius_certificate_authentication_instance = UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_local_radius_certificate_authentication_dict = update_network_wireless_ssid_request_local_radius_certificate_authentication_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication from a dict
update_network_wireless_ssid_request_local_radius_certificate_authentication_from_dict = UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication.from_dict(update_network_wireless_ssid_request_local_radius_certificate_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


