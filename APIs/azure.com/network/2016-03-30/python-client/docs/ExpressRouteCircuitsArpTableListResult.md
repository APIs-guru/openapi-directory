# ExpressRouteCircuitsArpTableListResult

Response for ListArpTable associated with the Express Route Circuits Api

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCircuitArpTable]**](ExpressRouteCircuitArpTable.md) | Gets List of ArpTable | [optional] 

## Example

```python
from openapi_client.models.express_route_circuits_arp_table_list_result import ExpressRouteCircuitsArpTableListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitsArpTableListResult from a JSON string
express_route_circuits_arp_table_list_result_instance = ExpressRouteCircuitsArpTableListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitsArpTableListResult.to_json())

# convert the object into a dict
express_route_circuits_arp_table_list_result_dict = express_route_circuits_arp_table_list_result_instance.to_dict()
# create an instance of ExpressRouteCircuitsArpTableListResult from a dict
express_route_circuits_arp_table_list_result_from_dict = ExpressRouteCircuitsArpTableListResult.from_dict(express_route_circuits_arp_table_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


