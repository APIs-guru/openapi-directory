# LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace

AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefixes** | **List[str]** | A list of address blocks reserved for this virtual network in CIDR notation. | [optional] 

## Example

```python
from openapi_client.models.local_network_gateway_properties_format_local_network_address_space import LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace

# TODO update the JSON string below
json = "{}"
# create an instance of LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace from a JSON string
local_network_gateway_properties_format_local_network_address_space_instance = LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace.from_json(json)
# print the JSON string representation of the object
print(LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace.to_json())

# convert the object into a dict
local_network_gateway_properties_format_local_network_address_space_dict = local_network_gateway_properties_format_local_network_address_space_instance.to_dict()
# create an instance of LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace from a dict
local_network_gateway_properties_format_local_network_address_space_from_dict = LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace.from_dict(local_network_gateway_properties_format_local_network_address_space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


