# GetNetworkCellularGatewayDhcp200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcp_lease_time** | **str** | DHCP Lease time for all MG in the network. | [optional] 
**dns_custom_nameservers** | **List[str]** | List of fixed IPs representing the the DNS Name servers when the mode is &#39;custom&#39;. | [optional] 
**dns_nameservers** | **str** | DNS name servers mode for all MG in the network. | [optional] 

## Example

```python
from openapi_client.models.get_network_cellular_gateway_dhcp200_response import GetNetworkCellularGatewayDhcp200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkCellularGatewayDhcp200Response from a JSON string
get_network_cellular_gateway_dhcp200_response_instance = GetNetworkCellularGatewayDhcp200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkCellularGatewayDhcp200Response.to_json())

# convert the object into a dict
get_network_cellular_gateway_dhcp200_response_dict = get_network_cellular_gateway_dhcp200_response_instance.to_dict()
# create an instance of GetNetworkCellularGatewayDhcp200Response from a dict
get_network_cellular_gateway_dhcp200_response_from_dict = GetNetworkCellularGatewayDhcp200Response.from_dict(get_network_cellular_gateway_dhcp200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


