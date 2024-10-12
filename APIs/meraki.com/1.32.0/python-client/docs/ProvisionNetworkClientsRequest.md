# ProvisionNetworkClientsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**List[ProvisionNetworkClientsRequestClientsInner]**](ProvisionNetworkClientsRequestClientsInner.md) | The array of clients to provision | 
**device_policy** | **str** | The policy to apply to the specified client. Can be &#39;Group policy&#39;, &#39;Allowed&#39;, &#39;Blocked&#39;, &#39;Per connection&#39; or &#39;Normal&#39;. Required. | 
**group_policy_id** | **str** | The ID of the desired group policy to apply to the client. Required if &#39;devicePolicy&#39; is set to \&quot;Group policy\&quot;. Otherwise this is ignored. | [optional] 
**policies_by_security_appliance** | [**ProvisionNetworkClientsRequestPoliciesBySecurityAppliance**](ProvisionNetworkClientsRequestPoliciesBySecurityAppliance.md) |  | [optional] 
**policies_by_ssid** | [**ProvisionNetworkClientsRequestPoliciesBySsid**](ProvisionNetworkClientsRequestPoliciesBySsid.md) |  | [optional] 

## Example

```python
from openapi_client.models.provision_network_clients_request import ProvisionNetworkClientsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionNetworkClientsRequest from a JSON string
provision_network_clients_request_instance = ProvisionNetworkClientsRequest.from_json(json)
# print the JSON string representation of the object
print(ProvisionNetworkClientsRequest.to_json())

# convert the object into a dict
provision_network_clients_request_dict = provision_network_clients_request_instance.to_dict()
# create an instance of ProvisionNetworkClientsRequest from a dict
provision_network_clients_request_from_dict = ProvisionNetworkClientsRequest.from_dict(provision_network_clients_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


