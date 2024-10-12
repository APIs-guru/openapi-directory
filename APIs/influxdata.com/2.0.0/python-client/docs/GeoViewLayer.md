# GeoViewLayer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**color_dimension** | [**Axis**](Axis.md) |  | 
**color_field** | **str** | Marker color field | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**interpolate_colors** | **bool** | Interpolate circle color based on displayed value | [optional] 
**radius** | **int** | Radius size in pixels | 
**radius_dimension** | [**Axis**](Axis.md) |  | 
**radius_field** | **str** | Radius field | 
**blur** | **int** | Blur for heatmap points | 
**intensity_dimension** | [**Axis**](Axis.md) |  | 
**intensity_field** | **str** | Intensity field | 
**is_clustered** | **bool** | Cluster close markers together | [optional] 
**random_colors** | **bool** | Assign different colors to different tracks | 
**speed** | **int** | Speed of the track animation | 
**track_width** | **int** | Width of the track | 

## Example

```python
from openapi_client.models.geo_view_layer import GeoViewLayer

# TODO update the JSON string below
json = "{}"
# create an instance of GeoViewLayer from a JSON string
geo_view_layer_instance = GeoViewLayer.from_json(json)
# print the JSON string representation of the object
print(GeoViewLayer.to_json())

# convert the object into a dict
geo_view_layer_dict = geo_view_layer_instance.to_dict()
# create an instance of GeoViewLayer from a dict
geo_view_layer_from_dict = GeoViewLayer.from_dict(geo_view_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


