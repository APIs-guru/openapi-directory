# UpdateNetworkApplianceFirewallFirewalledServiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | A string indicating the rule for which IPs are allowed to use the specified service. Acceptable values are \&quot;blocked\&quot; (no remote IPs can access the service), \&quot;restricted\&quot; (only allowed IPs can access the service), and \&quot;unrestriced\&quot; (any remote IP can access the service). This field is required | 
**allowed_ips** | **List[str]** | An array of allowed IPs that can access the service. This field is required if \&quot;access\&quot; is set to \&quot;restricted\&quot;. Otherwise this field is ignored | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_firewall_firewalled_service_request import UpdateNetworkApplianceFirewallFirewalledServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceFirewallFirewalledServiceRequest from a JSON string
update_network_appliance_firewall_firewalled_service_request_instance = UpdateNetworkApplianceFirewallFirewalledServiceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceFirewallFirewalledServiceRequest.to_json())

# convert the object into a dict
update_network_appliance_firewall_firewalled_service_request_dict = update_network_appliance_firewall_firewalled_service_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceFirewallFirewalledServiceRequest from a dict
update_network_appliance_firewall_firewalled_service_request_from_dict = UpdateNetworkApplianceFirewallFirewalledServiceRequest.from_dict(update_network_appliance_firewall_firewalled_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


