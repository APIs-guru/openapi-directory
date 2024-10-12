# VpnClientConfiguration

VpnClientConfiguration for P2S client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpn_client_address_pool** | [**LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace**](LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace.md) |  | [optional] 
**vpn_client_revoked_certificates** | [**List[VpnClientRevokedCertificate]**](VpnClientRevokedCertificate.md) | VpnClientRevokedCertificate for Virtual network gateway. | [optional] 
**vpn_client_root_certificates** | [**List[VpnClientRootCertificate]**](VpnClientRootCertificate.md) | VpnClientRootCertificate for virtual network gateway. | [optional] 

## Example

```python
from openapi_client.models.vpn_client_configuration import VpnClientConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientConfiguration from a JSON string
vpn_client_configuration_instance = VpnClientConfiguration.from_json(json)
# print the JSON string representation of the object
print(VpnClientConfiguration.to_json())

# convert the object into a dict
vpn_client_configuration_dict = vpn_client_configuration_instance.to_dict()
# create an instance of VpnClientConfiguration from a dict
vpn_client_configuration_from_dict = VpnClientConfiguration.from_dict(vpn_client_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


