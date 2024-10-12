# VirtualRouterPeeringListResult

Response for ListVirtualRouterPeerings API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[VirtualRouterPeering]**](VirtualRouterPeering.md) | List of VirtualRouterPeerings in a VirtualRouter. | [optional] 

## Example

```python
from openapi_client.models.virtual_router_peering_list_result import VirtualRouterPeeringListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRouterPeeringListResult from a JSON string
virtual_router_peering_list_result_instance = VirtualRouterPeeringListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualRouterPeeringListResult.to_json())

# convert the object into a dict
virtual_router_peering_list_result_dict = virtual_router_peering_list_result_instance.to_dict()
# create an instance of VirtualRouterPeeringListResult from a dict
virtual_router_peering_list_result_from_dict = VirtualRouterPeeringListResult.from_dict(virtual_router_peering_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


