# VpnGatewayPropertiesBgpSettings

BGP settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **int** | The BGP speaker&#39;s ASN. | [optional] 
**bgp_peering_address** | **str** | The BGP peering address and BGP identifier of this BGP speaker. | [optional] 
**peer_weight** | **int** | The weight added to routes learned from this BGP speaker. | [optional] 

## Example

```python
from openapi_client.models.vpn_gateway_properties_bgp_settings import VpnGatewayPropertiesBgpSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VpnGatewayPropertiesBgpSettings from a JSON string
vpn_gateway_properties_bgp_settings_instance = VpnGatewayPropertiesBgpSettings.from_json(json)
# print the JSON string representation of the object
print(VpnGatewayPropertiesBgpSettings.to_json())

# convert the object into a dict
vpn_gateway_properties_bgp_settings_dict = vpn_gateway_properties_bgp_settings_instance.to_dict()
# create an instance of VpnGatewayPropertiesBgpSettings from a dict
vpn_gateway_properties_bgp_settings_from_dict = VpnGatewayPropertiesBgpSettings.from_dict(vpn_gateway_properties_bgp_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


