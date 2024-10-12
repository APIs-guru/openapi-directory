# BasemapZOrder

Metadata necessary to determine the ordering of a particular basemap element relative to others. To render the basemap correctly, sort by z-plane, then z-grade, then z-within-grade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**z_grade** | **int** | The second most significant component of the ordering of a component to be rendered onto the basemap. | [optional] 
**z_plane** | **int** | The most significant component of the ordering of a component to be rendered onto the basemap. | [optional] 
**z_within_grade** | **int** | The least significant component of the ordering of a component to be rendered onto the basemap. | [optional] 

## Example

```python
from openapi_client.models.basemap_z_order import BasemapZOrder

# TODO update the JSON string below
json = "{}"
# create an instance of BasemapZOrder from a JSON string
basemap_z_order_instance = BasemapZOrder.from_json(json)
# print the JSON string representation of the object
print(BasemapZOrder.to_json())

# convert the object into a dict
basemap_z_order_dict = basemap_z_order_instance.to_dict()
# create an instance of BasemapZOrder from a dict
basemap_z_order_from_dict = BasemapZOrder.from_dict(basemap_z_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


