# ExpressRouteCircuitStats

Contains Stats associated with the peering

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primarybytes_in** | **int** | Gets BytesIn of the peering. | [optional] 
**primarybytes_out** | **int** | Gets BytesOut of the peering. | [optional] 
**secondarybytes_in** | **int** | Gets BytesIn of the peering. | [optional] 
**secondarybytes_out** | **int** | Gets BytesOut of the peering. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_stats import ExpressRouteCircuitStats

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitStats from a JSON string
express_route_circuit_stats_instance = ExpressRouteCircuitStats.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitStats.to_json())

# convert the object into a dict
express_route_circuit_stats_dict = express_route_circuit_stats_instance.to_dict()
# create an instance of ExpressRouteCircuitStats from a dict
express_route_circuit_stats_from_dict = ExpressRouteCircuitStats.from_dict(express_route_circuit_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


