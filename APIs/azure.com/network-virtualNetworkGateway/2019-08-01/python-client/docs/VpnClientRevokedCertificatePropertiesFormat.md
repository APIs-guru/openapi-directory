# VpnClientRevokedCertificatePropertiesFormat

Properties of the revoked VPN client certificate of virtual network gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**thumbprint** | **str** | The revoked VPN client certificate thumbprint. | [optional] 

## Example

```python
from openapi_client.models.vpn_client_revoked_certificate_properties_format import VpnClientRevokedCertificatePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientRevokedCertificatePropertiesFormat from a JSON string
vpn_client_revoked_certificate_properties_format_instance = VpnClientRevokedCertificatePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VpnClientRevokedCertificatePropertiesFormat.to_json())

# convert the object into a dict
vpn_client_revoked_certificate_properties_format_dict = vpn_client_revoked_certificate_properties_format_instance.to_dict()
# create an instance of VpnClientRevokedCertificatePropertiesFormat from a dict
vpn_client_revoked_certificate_properties_format_from_dict = VpnClientRevokedCertificatePropertiesFormat.from_dict(vpn_client_revoked_certificate_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


