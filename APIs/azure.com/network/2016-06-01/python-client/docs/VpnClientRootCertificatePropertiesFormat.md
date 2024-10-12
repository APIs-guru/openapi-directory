# VpnClientRootCertificatePropertiesFormat

Properties of SSL certificates of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Gets provisioning state of the VPN client root certificate resource Updating/Deleting/Failed | [optional] 
**public_cert_data** | **str** | Gets or sets the certificate public data | [optional] 

## Example

```python
from openapi_client.models.vpn_client_root_certificate_properties_format import VpnClientRootCertificatePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientRootCertificatePropertiesFormat from a JSON string
vpn_client_root_certificate_properties_format_instance = VpnClientRootCertificatePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VpnClientRootCertificatePropertiesFormat.to_json())

# convert the object into a dict
vpn_client_root_certificate_properties_format_dict = vpn_client_root_certificate_properties_format_instance.to_dict()
# create an instance of VpnClientRootCertificatePropertiesFormat from a dict
vpn_client_root_certificate_properties_format_from_dict = VpnClientRootCertificatePropertiesFormat.from_dict(vpn_client_root_certificate_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


