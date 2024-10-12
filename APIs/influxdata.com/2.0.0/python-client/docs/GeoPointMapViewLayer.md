# GeoPointMapViewLayer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**color_dimension** | [**Axis**](Axis.md) |  | 
**color_field** | **str** | Marker color field | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**is_clustered** | **bool** | Cluster close markers together | [optional] 

## Example

```python
from openapi_client.models.geo_point_map_view_layer import GeoPointMapViewLayer

# TODO update the JSON string below
json = "{}"
# create an instance of GeoPointMapViewLayer from a JSON string
geo_point_map_view_layer_instance = GeoPointMapViewLayer.from_json(json)
# print the JSON string representation of the object
print(GeoPointMapViewLayer.to_json())

# convert the object into a dict
geo_point_map_view_layer_dict = geo_point_map_view_layer_instance.to_dict()
# create an instance of GeoPointMapViewLayer from a dict
geo_point_map_view_layer_from_dict = GeoPointMapViewLayer.from_dict(geo_point_map_view_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


