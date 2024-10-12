# ListNetworkPoliciesResponse

Response message for VmwareEngine.ListNetworkPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_policies** | [**List[NetworkPolicy]**](NetworkPolicy.md) | A list of network policies. | [optional] 
**next_page_token** | **str** | A token, which can be send as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached when making an aggregated query using wildcards. | [optional] 

## Example

```python
from openapi_client.models.list_network_policies_response import ListNetworkPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNetworkPoliciesResponse from a JSON string
list_network_policies_response_instance = ListNetworkPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNetworkPoliciesResponse.to_json())

# convert the object into a dict
list_network_policies_response_dict = list_network_policies_response_instance.to_dict()
# create an instance of ListNetworkPoliciesResponse from a dict
list_network_policies_response_from_dict = ListNetworkPoliciesResponse.from_dict(list_network_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


