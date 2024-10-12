# ExpressRouteCircuitArpTable

The arp table associated with the ExpressRouteCircuit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | Gets ipAddress. | [optional] 
**mac_address** | **str** | Gets macAddress. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_arp_table import ExpressRouteCircuitArpTable

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitArpTable from a JSON string
express_route_circuit_arp_table_instance = ExpressRouteCircuitArpTable.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitArpTable.to_json())

# convert the object into a dict
express_route_circuit_arp_table_dict = express_route_circuit_arp_table_instance.to_dict()
# create an instance of ExpressRouteCircuitArpTable from a dict
express_route_circuit_arp_table_from_dict = ExpressRouteCircuitArpTable.from_dict(express_route_circuit_arp_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


