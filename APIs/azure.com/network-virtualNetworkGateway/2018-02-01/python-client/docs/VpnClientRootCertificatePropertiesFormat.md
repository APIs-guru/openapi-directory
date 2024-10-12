# VpnClientRootCertificatePropertiesFormat

Properties of SSL certificates of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the VPN client root certificate resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**public_cert_data** | **str** | The certificate public data. | 

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


