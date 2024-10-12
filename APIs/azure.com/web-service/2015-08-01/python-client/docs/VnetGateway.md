# VnetGateway

The VnetGateway contract. This is used to give the vnet gateway access to the VPN package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.vnet_gateway import VnetGateway

# TODO update the JSON string below
json = "{}"
# create an instance of VnetGateway from a JSON string
vnet_gateway_instance = VnetGateway.from_json(json)
# print the JSON string representation of the object
print(VnetGateway.to_json())

# convert the object into a dict
vnet_gateway_dict = vnet_gateway_instance.to_dict()
# create an instance of VnetGateway from a dict
vnet_gateway_from_dict = VnetGateway.from_dict(vnet_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


