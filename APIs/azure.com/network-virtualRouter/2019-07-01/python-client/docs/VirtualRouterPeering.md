# VirtualRouterPeering

Virtual Router Peering resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | Gets name of the peering unique to VirtualRouter. This name can be used to access the resource. | [optional] 
**properties** | [**VirtualRouterPeeringProperties**](VirtualRouterPeeringProperties.md) |  | [optional] 
**type** | **str** | Peering type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.virtual_router_peering import VirtualRouterPeering

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRouterPeering from a JSON string
virtual_router_peering_instance = VirtualRouterPeering.from_json(json)
# print the JSON string representation of the object
print(VirtualRouterPeering.to_json())

# convert the object into a dict
virtual_router_peering_dict = virtual_router_peering_instance.to_dict()
# create an instance of VirtualRouterPeering from a dict
virtual_router_peering_from_dict = VirtualRouterPeering.from_dict(virtual_router_peering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


