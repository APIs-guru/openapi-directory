# P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat

Properties of the Radius client root certificate of P2SVpnServerConfiguration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the Radius client root certificate resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**thumbprint** | **str** | The Radius client root certificate thumbprint. | [optional] 

## Example

```python
from openapi_client.models.p2_s_vpn_server_config_radius_client_root_certificate_properties_format import P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat from a JSON string
p2_s_vpn_server_config_radius_client_root_certificate_properties_format_instance = P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat.to_json())

# convert the object into a dict
p2_s_vpn_server_config_radius_client_root_certificate_properties_format_dict = p2_s_vpn_server_config_radius_client_root_certificate_properties_format_instance.to_dict()
# create an instance of P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat from a dict
p2_s_vpn_server_config_radius_client_root_certificate_properties_format_from_dict = P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat.from_dict(p2_s_vpn_server_config_radius_client_root_certificate_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


