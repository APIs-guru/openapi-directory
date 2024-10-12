# P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat

Properties of Radius Server root certificate of P2SVpnServerConfiguration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the P2SVpnServerConfiguration Radius Server root certificate resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**public_cert_data** | **str** | The certificate public data. | 

## Example

```python
from openapi_client.models.p2_s_vpn_server_config_radius_server_root_certificate_properties_format import P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat from a JSON string
p2_s_vpn_server_config_radius_server_root_certificate_properties_format_instance = P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat.to_json())

# convert the object into a dict
p2_s_vpn_server_config_radius_server_root_certificate_properties_format_dict = p2_s_vpn_server_config_radius_server_root_certificate_properties_format_instance.to_dict()
# create an instance of P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat from a dict
p2_s_vpn_server_config_radius_server_root_certificate_properties_format_from_dict = P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat.from_dict(p2_s_vpn_server_config_radius_server_root_certificate_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


