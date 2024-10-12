# ListNetworkPeeringsResponse

Response message for VmwareEngine.ListNetworkPeerings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_peerings** | [**List[NetworkPeering]**](NetworkPeering.md) | A list of network peerings. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Unreachable resources. | [optional] 

## Example

```python
from openapi_client.models.list_network_peerings_response import ListNetworkPeeringsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNetworkPeeringsResponse from a JSON string
list_network_peerings_response_instance = ListNetworkPeeringsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNetworkPeeringsResponse.to_json())

# convert the object into a dict
list_network_peerings_response_dict = list_network_peerings_response_instance.to_dict()
# create an instance of ListNetworkPeeringsResponse from a dict
list_network_peerings_response_from_dict = ListNetworkPeeringsResponse.from_dict(list_network_peerings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


