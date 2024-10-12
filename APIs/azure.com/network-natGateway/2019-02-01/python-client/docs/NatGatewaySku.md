# NatGatewaySku

SKU of nat gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of Nat Gateway SKU. | [optional] 

## Example

```python
from openapi_client.models.nat_gateway_sku import NatGatewaySku

# TODO update the JSON string below
json = "{}"
# create an instance of NatGatewaySku from a JSON string
nat_gateway_sku_instance = NatGatewaySku.from_json(json)
# print the JSON string representation of the object
print(NatGatewaySku.to_json())

# convert the object into a dict
nat_gateway_sku_dict = nat_gateway_sku_instance.to_dict()
# create an instance of NatGatewaySku from a dict
nat_gateway_sku_from_dict = NatGatewaySku.from_dict(nat_gateway_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


