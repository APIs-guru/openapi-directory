# GeoCircleViewLayer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**color_dimension** | [**Axis**](Axis.md) |  | 
**color_field** | **str** | Circle color field | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**interpolate_colors** | **bool** | Interpolate circle color based on displayed value | [optional] 
**radius** | **int** | Maximum radius size in pixels | [optional] 
**radius_dimension** | [**Axis**](Axis.md) |  | 
**radius_field** | **str** | Radius field | 

## Example

```python
from openapi_client.models.geo_circle_view_layer import GeoCircleViewLayer

# TODO update the JSON string below
json = "{}"
# create an instance of GeoCircleViewLayer from a JSON string
geo_circle_view_layer_instance = GeoCircleViewLayer.from_json(json)
# print the JSON string representation of the object
print(GeoCircleViewLayer.to_json())

# convert the object into a dict
geo_circle_view_layer_dict = geo_circle_view_layer_instance.to_dict()
# create an instance of GeoCircleViewLayer from a dict
geo_circle_view_layer_from_dict = GeoCircleViewLayer.from_dict(geo_circle_view_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


