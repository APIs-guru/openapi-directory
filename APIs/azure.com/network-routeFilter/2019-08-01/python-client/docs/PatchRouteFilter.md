# PatchRouteFilter

Route Filter Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] [readonly] 
**properties** | [**RouteFilterPropertiesFormat**](RouteFilterPropertiesFormat.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.patch_route_filter import PatchRouteFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PatchRouteFilter from a JSON string
patch_route_filter_instance = PatchRouteFilter.from_json(json)
# print the JSON string representation of the object
print(PatchRouteFilter.to_json())

# convert the object into a dict
patch_route_filter_dict = patch_route_filter_instance.to_dict()
# create an instance of PatchRouteFilter from a dict
patch_route_filter_from_dict = PatchRouteFilter.from_dict(patch_route_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


