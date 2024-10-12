# VpnSiteLinkProperties

Parameters for VpnSite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bgp_properties** | [**VpnLinkBgpSettings**](VpnLinkBgpSettings.md) |  | [optional] 
**ip_address** | **str** | The ip-address for the vpn-site-link. | [optional] 
**link_properties** | [**VpnLinkProviderProperties**](VpnLinkProviderProperties.md) |  | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vpn_site_link_properties import VpnSiteLinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VpnSiteLinkProperties from a JSON string
vpn_site_link_properties_instance = VpnSiteLinkProperties.from_json(json)
# print the JSON string representation of the object
print(VpnSiteLinkProperties.to_json())

# convert the object into a dict
vpn_site_link_properties_dict = vpn_site_link_properties_instance.to_dict()
# create an instance of VpnSiteLinkProperties from a dict
vpn_site_link_properties_from_dict = VpnSiteLinkProperties.from_dict(vpn_site_link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


