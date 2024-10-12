# ListVpnSiteLinkConnectionsResult

Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[VpnSiteLinkConnection]**](VpnSiteLinkConnection.md) | List of VpnSiteLinkConnections. | [optional] 

## Example

```python
from openapi_client.models.list_vpn_site_link_connections_result import ListVpnSiteLinkConnectionsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListVpnSiteLinkConnectionsResult from a JSON string
list_vpn_site_link_connections_result_instance = ListVpnSiteLinkConnectionsResult.from_json(json)
# print the JSON string representation of the object
print(ListVpnSiteLinkConnectionsResult.to_json())

# convert the object into a dict
list_vpn_site_link_connections_result_dict = list_vpn_site_link_connections_result_instance.to_dict()
# create an instance of ListVpnSiteLinkConnectionsResult from a dict
list_vpn_site_link_connections_result_from_dict = ListVpnSiteLinkConnectionsResult.from_dict(list_vpn_site_link_connections_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


