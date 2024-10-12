# ExpressRouteCircuit

ExpressRouteCircuit resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated | [optional] 
**properties** | [**ExpressRouteCircuitPropertiesFormat**](ExpressRouteCircuitPropertiesFormat.md) |  | [optional] 
**sku** | [**ExpressRouteCircuitSku**](ExpressRouteCircuitSku.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_circuit import ExpressRouteCircuit

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuit from a JSON string
express_route_circuit_instance = ExpressRouteCircuit.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuit.to_json())

# convert the object into a dict
express_route_circuit_dict = express_route_circuit_instance.to_dict()
# create an instance of ExpressRouteCircuit from a dict
express_route_circuit_from_dict = ExpressRouteCircuit.from_dict(express_route_circuit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


