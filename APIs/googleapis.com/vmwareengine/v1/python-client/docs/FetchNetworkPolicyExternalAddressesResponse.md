# FetchNetworkPolicyExternalAddressesResponse

Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_addresses** | [**List[ExternalAddress]**](ExternalAddress.md) | A list of external IP addresses assigned to VMware workload VMs within the scope of the given network policy. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.fetch_network_policy_external_addresses_response import FetchNetworkPolicyExternalAddressesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchNetworkPolicyExternalAddressesResponse from a JSON string
fetch_network_policy_external_addresses_response_instance = FetchNetworkPolicyExternalAddressesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchNetworkPolicyExternalAddressesResponse.to_json())

# convert the object into a dict
fetch_network_policy_external_addresses_response_dict = fetch_network_policy_external_addresses_response_instance.to_dict()
# create an instance of FetchNetworkPolicyExternalAddressesResponse from a dict
fetch_network_policy_external_addresses_response_from_dict = FetchNetworkPolicyExternalAddressesResponse.from_dict(fetch_network_policy_external_addresses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


