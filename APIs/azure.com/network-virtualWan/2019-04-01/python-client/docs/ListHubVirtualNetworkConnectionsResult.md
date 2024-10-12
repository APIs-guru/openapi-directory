# ListHubVirtualNetworkConnectionsResult

List of HubVirtualNetworkConnections and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[HubVirtualNetworkConnection]**](HubVirtualNetworkConnection.md) | List of HubVirtualNetworkConnections. | [optional] 

## Example

```python
from openapi_client.models.list_hub_virtual_network_connections_result import ListHubVirtualNetworkConnectionsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListHubVirtualNetworkConnectionsResult from a JSON string
list_hub_virtual_network_connections_result_instance = ListHubVirtualNetworkConnectionsResult.from_json(json)
# print the JSON string representation of the object
print(ListHubVirtualNetworkConnectionsResult.to_json())

# convert the object into a dict
list_hub_virtual_network_connections_result_dict = list_hub_virtual_network_connections_result_instance.to_dict()
# create an instance of ListHubVirtualNetworkConnectionsResult from a dict
list_hub_virtual_network_connections_result_from_dict = ListHubVirtualNetworkConnectionsResult.from_dict(list_hub_virtual_network_connections_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


