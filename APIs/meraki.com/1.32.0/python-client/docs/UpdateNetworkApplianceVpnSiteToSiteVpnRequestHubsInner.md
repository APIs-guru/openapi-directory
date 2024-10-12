# UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hub_id** | **str** | The network ID of the hub. | 
**use_default_route** | **bool** | Only valid in &#39;spoke&#39; mode. Indicates whether default route traffic should be sent to this hub. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_vpn_site_to_site_vpn_request_hubs_inner import UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner from a JSON string
update_network_appliance_vpn_site_to_site_vpn_request_hubs_inner_instance = UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner.to_json())

# convert the object into a dict
update_network_appliance_vpn_site_to_site_vpn_request_hubs_inner_dict = update_network_appliance_vpn_site_to_site_vpn_request_hubs_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner from a dict
update_network_appliance_vpn_site_to_site_vpn_request_hubs_inner_from_dict = UpdateNetworkApplianceVpnSiteToSiteVpnRequestHubsInner.from_dict(update_network_appliance_vpn_site_to_site_vpn_request_hubs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


