# P2SVpnServerConfigRadiusServerRootCertificate

Radius Server root certificate of P2SVpnServerConfiguration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat**](P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat.md) |  | 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.p2_s_vpn_server_config_radius_server_root_certificate import P2SVpnServerConfigRadiusServerRootCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnServerConfigRadiusServerRootCertificate from a JSON string
p2_s_vpn_server_config_radius_server_root_certificate_instance = P2SVpnServerConfigRadiusServerRootCertificate.from_json(json)
# print the JSON string representation of the object
print(P2SVpnServerConfigRadiusServerRootCertificate.to_json())

# convert the object into a dict
p2_s_vpn_server_config_radius_server_root_certificate_dict = p2_s_vpn_server_config_radius_server_root_certificate_instance.to_dict()
# create an instance of P2SVpnServerConfigRadiusServerRootCertificate from a dict
p2_s_vpn_server_config_radius_server_root_certificate_from_dict = P2SVpnServerConfigRadiusServerRootCertificate.from_dict(p2_s_vpn_server_config_radius_server_root_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


