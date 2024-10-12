# VnetRoute

VnetRoute contract used to pass routing information for a vnet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.vnet_route import VnetRoute

# TODO update the JSON string below
json = "{}"
# create an instance of VnetRoute from a JSON string
vnet_route_instance = VnetRoute.from_json(json)
# print the JSON string representation of the object
print(VnetRoute.to_json())

# convert the object into a dict
vnet_route_dict = vnet_route_instance.to_dict()
# create an instance of VnetRoute from a dict
vnet_route_from_dict = VnetRoute.from_dict(vnet_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


