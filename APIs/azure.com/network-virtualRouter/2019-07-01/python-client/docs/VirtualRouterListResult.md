# VirtualRouterListResult

Response for ListVirtualRouters API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[VirtualRouter]**](VirtualRouter.md) | List of Virtual Routers. | [optional] 

## Example

```python
from openapi_client.models.virtual_router_list_result import VirtualRouterListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRouterListResult from a JSON string
virtual_router_list_result_instance = VirtualRouterListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualRouterListResult.to_json())

# convert the object into a dict
virtual_router_list_result_dict = virtual_router_list_result_instance.to_dict()
# create an instance of VirtualRouterListResult from a dict
virtual_router_list_result_from_dict = VirtualRouterListResult.from_dict(virtual_router_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


