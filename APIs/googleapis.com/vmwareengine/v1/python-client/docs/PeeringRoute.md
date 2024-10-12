# PeeringRoute

Exchanged network peering route.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_range** | **str** | Output only. Destination range of the peering route in CIDR notation. | [optional] [readonly] 
**direction** | **str** | Output only. Direction of the routes exchanged with the peer network, from the VMware Engine network perspective: * Routes of direction &#x60;INCOMING&#x60; are imported from the peer network. * Routes of direction &#x60;OUTGOING&#x60; are exported from the intranet VPC network of the VMware Engine network. | [optional] [readonly] 
**imported** | **bool** | Output only. True if the peering route has been imported from a peered VPC network; false otherwise. The import happens if the field &#x60;NetworkPeering.importCustomRoutes&#x60; is true for this network, &#x60;NetworkPeering.exportCustomRoutes&#x60; is true for the peer VPC network, and the import does not result in a route conflict. | [optional] [readonly] 
**next_hop_region** | **str** | Output only. Region containing the next hop of the peering route. This field only applies to dynamic routes in the peer VPC network. | [optional] [readonly] 
**priority** | **str** | Output only. The priority of the peering route. | [optional] [readonly] 
**type** | **str** | Output only. Type of the route in the peer VPC network. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_route import PeeringRoute

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringRoute from a JSON string
peering_route_instance = PeeringRoute.from_json(json)
# print the JSON string representation of the object
print(PeeringRoute.to_json())

# convert the object into a dict
peering_route_dict = peering_route_instance.to_dict()
# create an instance of PeeringRoute from a dict
peering_route_from_dict = PeeringRoute.from_dict(peering_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


