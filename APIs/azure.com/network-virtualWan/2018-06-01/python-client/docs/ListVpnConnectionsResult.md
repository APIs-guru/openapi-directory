# ListVpnConnectionsResult

Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[VpnConnection]**](VpnConnection.md) | List of Vpn Connections. | [optional] 

## Example

```python
from openapi_client.models.list_vpn_connections_result import ListVpnConnectionsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListVpnConnectionsResult from a JSON string
list_vpn_connections_result_instance = ListVpnConnectionsResult.from_json(json)
# print the JSON string representation of the object
print(ListVpnConnectionsResult.to_json())

# convert the object into a dict
list_vpn_connections_result_dict = list_vpn_connections_result_instance.to_dict()
# create an instance of ListVpnConnectionsResult from a dict
list_vpn_connections_result_from_dict = ListVpnConnectionsResult.from_dict(list_vpn_connections_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


