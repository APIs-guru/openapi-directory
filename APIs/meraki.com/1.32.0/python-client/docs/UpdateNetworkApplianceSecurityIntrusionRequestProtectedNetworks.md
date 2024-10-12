# UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks

Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_cidr** | **List[str]** | list of IP addresses or subnets being excluded from protection (required if &#39;useDefault&#39; is false) | [optional] 
**included_cidr** | **List[str]** | list of IP addresses or subnets being protected (required if &#39;useDefault&#39; is false) | [optional] 
**use_default** | **bool** | true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_security_intrusion_request_protected_networks import UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks from a JSON string
update_network_appliance_security_intrusion_request_protected_networks_instance = UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks.to_json())

# convert the object into a dict
update_network_appliance_security_intrusion_request_protected_networks_dict = update_network_appliance_security_intrusion_request_protected_networks_instance.to_dict()
# create an instance of UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks from a dict
update_network_appliance_security_intrusion_request_protected_networks_from_dict = UpdateNetworkApplianceSecurityIntrusionRequestProtectedNetworks.from_dict(update_network_appliance_security_intrusion_request_protected_networks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


