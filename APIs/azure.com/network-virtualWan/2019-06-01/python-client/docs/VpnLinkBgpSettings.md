# VpnLinkBgpSettings

BGP settings details for a link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **int** | The BGP speaker&#39;s ASN. | [optional] 
**bgp_peering_address** | **str** | The BGP peering address and BGP identifier of this BGP speaker. | [optional] 

## Example

```python
from openapi_client.models.vpn_link_bgp_settings import VpnLinkBgpSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VpnLinkBgpSettings from a JSON string
vpn_link_bgp_settings_instance = VpnLinkBgpSettings.from_json(json)
# print the JSON string representation of the object
print(VpnLinkBgpSettings.to_json())

# convert the object into a dict
vpn_link_bgp_settings_dict = vpn_link_bgp_settings_instance.to_dict()
# create an instance of VpnLinkBgpSettings from a dict
vpn_link_bgp_settings_from_dict = VpnLinkBgpSettings.from_dict(vpn_link_bgp_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


