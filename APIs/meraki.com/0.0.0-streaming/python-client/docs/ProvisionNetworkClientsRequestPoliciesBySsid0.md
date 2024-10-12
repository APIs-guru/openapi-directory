# ProvisionNetworkClientsRequestPoliciesBySsid0

The number for the SSID

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_policy** | **str** | The policy to apply to the specified client. Can be &#39;Whitelisted&#39;, &#39;Blocked&#39;, &#39;Normal&#39; or &#39;Group policy&#39;. Required. | 
**group_policy_id** | **str** | The ID of the desired group policy to apply to the client. Required if &#39;devicePolicy&#39; is set to \&quot;Group policy\&quot;. Otherwise this is ignored. | [optional] 

## Example

```python
from openapi_client.models.provision_network_clients_request_policies_by_ssid0 import ProvisionNetworkClientsRequestPoliciesBySsid0

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionNetworkClientsRequestPoliciesBySsid0 from a JSON string
provision_network_clients_request_policies_by_ssid0_instance = ProvisionNetworkClientsRequestPoliciesBySsid0.from_json(json)
# print the JSON string representation of the object
print(ProvisionNetworkClientsRequestPoliciesBySsid0.to_json())

# convert the object into a dict
provision_network_clients_request_policies_by_ssid0_dict = provision_network_clients_request_policies_by_ssid0_instance.to_dict()
# create an instance of ProvisionNetworkClientsRequestPoliciesBySsid0 from a dict
provision_network_clients_request_policies_by_ssid0_from_dict = ProvisionNetworkClientsRequestPoliciesBySsid0.from_dict(provision_network_clients_request_policies_by_ssid0_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


