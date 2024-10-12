# UpdateNetworkApplianceVpnSiteToSiteVpnRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hubs** | [**List[UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner]**](UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner.md) | The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required. | [optional] 
**mode** | **str** | The site-to-site VPN mode. Can be one of &#39;none&#39;, &#39;spoke&#39; or &#39;hub&#39; | 
**subnets** | [**List[UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner]**](UpdateNetworkApplianceVpnSiteToSiteVpnRequestSubnetsInner.md) | The list of subnets and their VPN presence. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_vpn_site_to_site_vpn_request import UpdateNetworkApplianceVpnSiteToSiteVpnRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVpnSiteToSiteVpnRequest from a JSON string
update_network_appliance_vpn_site_to_site_vpn_request_instance = UpdateNetworkApplianceVpnSiteToSiteVpnRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVpnSiteToSiteVpnRequest.to_json())

# convert the object into a dict
update_network_appliance_vpn_site_to_site_vpn_request_dict = update_network_appliance_vpn_site_to_site_vpn_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceVpnSiteToSiteVpnRequest from a dict
update_network_appliance_vpn_site_to_site_vpn_request_from_dict = UpdateNetworkApplianceVpnSiteToSiteVpnRequest.from_dict(update_network_appliance_vpn_site_to_site_vpn_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


