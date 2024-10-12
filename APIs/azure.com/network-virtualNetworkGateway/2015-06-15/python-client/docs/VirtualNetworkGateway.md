# VirtualNetworkGateway

A common class for general resource information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**VirtualNetworkGatewayPropertiesFormat**](VirtualNetworkGatewayPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Identifier. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_gateway import VirtualNetworkGateway

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGateway from a JSON string
virtual_network_gateway_instance = VirtualNetworkGateway.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGateway.to_json())

# convert the object into a dict
virtual_network_gateway_dict = virtual_network_gateway_instance.to_dict()
# create an instance of VirtualNetworkGateway from a dict
virtual_network_gateway_from_dict = VirtualNetworkGateway.from_dict(virtual_network_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


