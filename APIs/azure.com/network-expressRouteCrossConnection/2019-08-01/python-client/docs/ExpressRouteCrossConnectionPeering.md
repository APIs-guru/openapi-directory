# ExpressRouteCrossConnectionPeering

Peering in an ExpressRoute Cross Connection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ExpressRouteCrossConnectionPeeringProperties**](ExpressRouteCrossConnectionPeeringProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connection_peering import ExpressRouteCrossConnectionPeering

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionPeering from a JSON string
express_route_cross_connection_peering_instance = ExpressRouteCrossConnectionPeering.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionPeering.to_json())

# convert the object into a dict
express_route_cross_connection_peering_dict = express_route_cross_connection_peering_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionPeering from a dict
express_route_cross_connection_peering_from_dict = ExpressRouteCrossConnectionPeering.from_dict(express_route_cross_connection_peering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


