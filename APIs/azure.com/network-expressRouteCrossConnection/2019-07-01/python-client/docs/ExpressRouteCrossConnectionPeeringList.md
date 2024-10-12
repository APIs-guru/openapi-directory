# ExpressRouteCrossConnectionPeeringList

Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCrossConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[ExpressRouteCrossConnectionPeering]**](ExpressRouteCrossConnectionPeering.md) | The peerings in an express route cross connection. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connection_peering_list import ExpressRouteCrossConnectionPeeringList

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionPeeringList from a JSON string
express_route_cross_connection_peering_list_instance = ExpressRouteCrossConnectionPeeringList.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionPeeringList.to_json())

# convert the object into a dict
express_route_cross_connection_peering_list_dict = express_route_cross_connection_peering_list_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionPeeringList from a dict
express_route_cross_connection_peering_list_from_dict = ExpressRouteCrossConnectionPeeringList.from_dict(express_route_cross_connection_peering_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


