# VpnGateway

VpnGateway Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**VpnGatewayProperties**](VpnGatewayProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vpn_gateway import VpnGateway

# TODO update the JSON string below
json = "{}"
# create an instance of VpnGateway from a JSON string
vpn_gateway_instance = VpnGateway.from_json(json)
# print the JSON string representation of the object
print(VpnGateway.to_json())

# convert the object into a dict
vpn_gateway_dict = vpn_gateway_instance.to_dict()
# create an instance of VpnGateway from a dict
vpn_gateway_from_dict = VpnGateway.from_dict(vpn_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


