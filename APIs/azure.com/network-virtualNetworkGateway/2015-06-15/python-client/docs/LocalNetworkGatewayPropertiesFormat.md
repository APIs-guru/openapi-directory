# LocalNetworkGatewayPropertiesFormat

LocalNetworkGateway properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bgp_settings** | [**BgpSettings**](BgpSettings.md) |  | [optional] 
**gateway_ip_address** | **str** | IP address of local network gateway. | [optional] 
**local_network_address_space** | [**LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace**](LocalNetworkGatewayPropertiesFormatLocalNetworkAddressSpace.md) |  | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the LocalNetworkGateway resource Updating/Deleting/Failed | [optional] 
**resource_guid** | **str** | The resource GUID property of the LocalNetworkGateway resource. | [optional] 

## Example

```python
from openapi_client.models.local_network_gateway_properties_format import LocalNetworkGatewayPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of LocalNetworkGatewayPropertiesFormat from a JSON string
local_network_gateway_properties_format_instance = LocalNetworkGatewayPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(LocalNetworkGatewayPropertiesFormat.to_json())

# convert the object into a dict
local_network_gateway_properties_format_dict = local_network_gateway_properties_format_instance.to_dict()
# create an instance of LocalNetworkGatewayPropertiesFormat from a dict
local_network_gateway_properties_format_from_dict = LocalNetworkGatewayPropertiesFormat.from_dict(local_network_gateway_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


