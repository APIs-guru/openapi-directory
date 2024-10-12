# UpdateNetworkCellularGatewayDhcpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcp_lease_time** | **str** | DHCP Lease time for all MG of the network. Possible values are &#39;30 minutes&#39;, &#39;1 hour&#39;, &#39;4 hours&#39;, &#39;12 hours&#39;, &#39;1 day&#39; or &#39;1 week&#39;. | [optional] 
**dns_custom_nameservers** | **List[str]** | list of fixed IPs representing the the DNS Name servers when the mode is &#39;custom&#39; | [optional] 
**dns_nameservers** | **str** | DNS name servers mode for all MG of the network. Possible values are: &#39;upstream_dns&#39;, &#39;google_dns&#39;, &#39;opendns&#39;, &#39;custom&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_network_cellular_gateway_dhcp_request import UpdateNetworkCellularGatewayDhcpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkCellularGatewayDhcpRequest from a JSON string
update_network_cellular_gateway_dhcp_request_instance = UpdateNetworkCellularGatewayDhcpRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkCellularGatewayDhcpRequest.to_json())

# convert the object into a dict
update_network_cellular_gateway_dhcp_request_dict = update_network_cellular_gateway_dhcp_request_instance.to_dict()
# create an instance of UpdateNetworkCellularGatewayDhcpRequest from a dict
update_network_cellular_gateway_dhcp_request_from_dict = UpdateNetworkCellularGatewayDhcpRequest.from_dict(update_network_cellular_gateway_dhcp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


