# NatGateway

Nat Gateway resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**NatGatewayPropertiesFormat**](NatGatewayPropertiesFormat.md) |  | [optional] 
**sku** | [**NatGatewaySku**](NatGatewaySku.md) |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting the zone in which Nat Gateway should be deployed. | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.nat_gateway import NatGateway

# TODO update the JSON string below
json = "{}"
# create an instance of NatGateway from a JSON string
nat_gateway_instance = NatGateway.from_json(json)
# print the JSON string representation of the object
print(NatGateway.to_json())

# convert the object into a dict
nat_gateway_dict = nat_gateway_instance.to_dict()
# create an instance of NatGateway from a dict
nat_gateway_from_dict = NatGateway.from_dict(nat_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


