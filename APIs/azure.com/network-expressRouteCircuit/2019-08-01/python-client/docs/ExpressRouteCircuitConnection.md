# ExpressRouteCircuitConnection

Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ExpressRouteCircuitConnectionPropertiesFormat**](ExpressRouteCircuitConnectionPropertiesFormat.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_connection import ExpressRouteCircuitConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitConnection from a JSON string
express_route_circuit_connection_instance = ExpressRouteCircuitConnection.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitConnection.to_json())

# convert the object into a dict
express_route_circuit_connection_dict = express_route_circuit_connection_instance.to_dict()
# create an instance of ExpressRouteCircuitConnection from a dict
express_route_circuit_connection_from_dict = ExpressRouteCircuitConnection.from_dict(express_route_circuit_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


