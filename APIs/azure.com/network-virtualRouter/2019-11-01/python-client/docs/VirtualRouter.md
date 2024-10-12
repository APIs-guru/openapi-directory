# VirtualRouter

VirtualRouter Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**VirtualRouterPropertiesFormat**](VirtualRouterPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_router import VirtualRouter

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRouter from a JSON string
virtual_router_instance = VirtualRouter.from_json(json)
# print the JSON string representation of the object
print(VirtualRouter.to_json())

# convert the object into a dict
virtual_router_dict = virtual_router_instance.to_dict()
# create an instance of VirtualRouter from a dict
virtual_router_from_dict = VirtualRouter.from_dict(virtual_router_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


