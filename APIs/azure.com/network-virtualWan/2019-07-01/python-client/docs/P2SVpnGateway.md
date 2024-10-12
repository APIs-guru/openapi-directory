# P2SVpnGateway

P2SVpnGateway Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**P2SVpnGatewayProperties**](P2SVpnGatewayProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.p2_s_vpn_gateway import P2SVpnGateway

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnGateway from a JSON string
p2_s_vpn_gateway_instance = P2SVpnGateway.from_json(json)
# print the JSON string representation of the object
print(P2SVpnGateway.to_json())

# convert the object into a dict
p2_s_vpn_gateway_dict = p2_s_vpn_gateway_instance.to_dict()
# create an instance of P2SVpnGateway from a dict
p2_s_vpn_gateway_from_dict = P2SVpnGateway.from_dict(p2_s_vpn_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


