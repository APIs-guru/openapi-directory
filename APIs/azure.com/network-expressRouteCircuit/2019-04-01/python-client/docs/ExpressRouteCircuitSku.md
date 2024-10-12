# ExpressRouteCircuitSku

Contains SKU in an ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **str** | The family of the SKU. | [optional] 
**name** | **str** | The name of the SKU. | [optional] 
**tier** | **str** | The tier of the SKU. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_sku import ExpressRouteCircuitSku

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitSku from a JSON string
express_route_circuit_sku_instance = ExpressRouteCircuitSku.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitSku.to_json())

# convert the object into a dict
express_route_circuit_sku_dict = express_route_circuit_sku_instance.to_dict()
# create an instance of ExpressRouteCircuitSku from a dict
express_route_circuit_sku_from_dict = ExpressRouteCircuitSku.from_dict(express_route_circuit_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


