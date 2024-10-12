# GeoHeatMapViewLayer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**blur** | **int** | Blur for heatmap points | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**intensity_dimension** | [**Axis**](Axis.md) |  | 
**intensity_field** | **str** | Intensity field | 
**radius** | **int** | Radius size in pixels | 

## Example

```python
from openapi_client.models.geo_heat_map_view_layer import GeoHeatMapViewLayer

# TODO update the JSON string below
json = "{}"
# create an instance of GeoHeatMapViewLayer from a JSON string
geo_heat_map_view_layer_instance = GeoHeatMapViewLayer.from_json(json)
# print the JSON string representation of the object
print(GeoHeatMapViewLayer.to_json())

# convert the object into a dict
geo_heat_map_view_layer_dict = geo_heat_map_view_layer_instance.to_dict()
# create an instance of GeoHeatMapViewLayer from a dict
geo_heat_map_view_layer_from_dict = GeoHeatMapViewLayer.from_dict(geo_heat_map_view_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


