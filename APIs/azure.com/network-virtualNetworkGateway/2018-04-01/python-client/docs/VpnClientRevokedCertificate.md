# VpnClientRevokedCertificate

VPN client revoked certificate of virtual network gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**VpnClientRevokedCertificatePropertiesFormat**](VpnClientRevokedCertificatePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.vpn_client_revoked_certificate import VpnClientRevokedCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientRevokedCertificate from a JSON string
vpn_client_revoked_certificate_instance = VpnClientRevokedCertificate.from_json(json)
# print the JSON string representation of the object
print(VpnClientRevokedCertificate.to_json())

# convert the object into a dict
vpn_client_revoked_certificate_dict = vpn_client_revoked_certificate_instance.to_dict()
# create an instance of VpnClientRevokedCertificate from a dict
vpn_client_revoked_certificate_from_dict = VpnClientRevokedCertificate.from_dict(vpn_client_revoked_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


