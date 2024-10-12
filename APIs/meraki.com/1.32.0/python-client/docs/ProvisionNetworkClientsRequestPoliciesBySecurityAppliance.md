# ProvisionNetworkClientsRequestPoliciesBySecurityAppliance

An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_policy** | **str** | The policy to apply to the specified client. Can be &#39;Allowed&#39;, &#39;Blocked&#39; or &#39;Normal&#39;. Required. | [optional] 

## Example

```python
from openapi_client.models.provision_network_clients_request_policies_by_security_appliance import ProvisionNetworkClientsRequestPoliciesBySecurityAppliance

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionNetworkClientsRequestPoliciesBySecurityAppliance from a JSON string
provision_network_clients_request_policies_by_security_appliance_instance = ProvisionNetworkClientsRequestPoliciesBySecurityAppliance.from_json(json)
# print the JSON string representation of the object
print(ProvisionNetworkClientsRequestPoliciesBySecurityAppliance.to_json())

# convert the object into a dict
provision_network_clients_request_policies_by_security_appliance_dict = provision_network_clients_request_policies_by_security_appliance_instance.to_dict()
# create an instance of ProvisionNetworkClientsRequestPoliciesBySecurityAppliance from a dict
provision_network_clients_request_policies_by_security_appliance_from_dict = ProvisionNetworkClientsRequestPoliciesBySecurityAppliance.from_dict(provision_network_clients_request_policies_by_security_appliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


