# ExpressRouteCircuitAuthorization

Authorization in an ExpressRouteCircuit resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**AuthorizationPropertiesFormat**](AuthorizationPropertiesFormat.md) |  | [optional] 
**type** | **str** | Type of the resource. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_authorization import ExpressRouteCircuitAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitAuthorization from a JSON string
express_route_circuit_authorization_instance = ExpressRouteCircuitAuthorization.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitAuthorization.to_json())

# convert the object into a dict
express_route_circuit_authorization_dict = express_route_circuit_authorization_instance.to_dict()
# create an instance of ExpressRouteCircuitAuthorization from a dict
express_route_circuit_authorization_from_dict = ExpressRouteCircuitAuthorization.from_dict(express_route_circuit_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


