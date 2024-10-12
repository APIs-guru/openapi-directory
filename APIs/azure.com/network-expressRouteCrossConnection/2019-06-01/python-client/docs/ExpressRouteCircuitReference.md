# ExpressRouteCircuitReference

Reference to an express route circuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Corresponding Express Route Circuit Id. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_reference import ExpressRouteCircuitReference

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitReference from a JSON string
express_route_circuit_reference_instance = ExpressRouteCircuitReference.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitReference.to_json())

# convert the object into a dict
express_route_circuit_reference_dict = express_route_circuit_reference_instance.to_dict()
# create an instance of ExpressRouteCircuitReference from a dict
express_route_circuit_reference_from_dict = ExpressRouteCircuitReference.from_dict(express_route_circuit_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


