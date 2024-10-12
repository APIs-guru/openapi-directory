# GetNetworkHealthAlerts200ResponseInnerScopePeersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | [**GetNetworkHealthAlerts200ResponseInnerScopePeersInnerNetwork**](GetNetworkHealthAlerts200ResponseInnerScopePeersInnerNetwork.md) |  | [optional] 
**url** | **str** | URL to the peer | [optional] 

## Example

```python
from openapi_client.models.get_network_health_alerts200_response_inner_scope_peers_inner import GetNetworkHealthAlerts200ResponseInnerScopePeersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkHealthAlerts200ResponseInnerScopePeersInner from a JSON string
get_network_health_alerts200_response_inner_scope_peers_inner_instance = GetNetworkHealthAlerts200ResponseInnerScopePeersInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkHealthAlerts200ResponseInnerScopePeersInner.to_json())

# convert the object into a dict
get_network_health_alerts200_response_inner_scope_peers_inner_dict = get_network_health_alerts200_response_inner_scope_peers_inner_instance.to_dict()
# create an instance of GetNetworkHealthAlerts200ResponseInnerScopePeersInner from a dict
get_network_health_alerts200_response_inner_scope_peers_inner_from_dict = GetNetworkHealthAlerts200ResponseInnerScopePeersInner.from_dict(get_network_health_alerts200_response_inner_scope_peers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


