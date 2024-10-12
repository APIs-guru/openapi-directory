# GeoTrackMapViewLayer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | [optional] 
**random_colors** | **bool** | Assign different colors to different tracks | [optional] 
**speed** | **int** | Speed of the track animation | [optional] 
**track_width** | **int** | Width of the track | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.geo_track_map_view_layer import GeoTrackMapViewLayer

# TODO update the JSON string below
json = "{}"
# create an instance of GeoTrackMapViewLayer from a JSON string
geo_track_map_view_layer_instance = GeoTrackMapViewLayer.from_json(json)
# print the JSON string representation of the object
print(GeoTrackMapViewLayer.to_json())

# convert the object into a dict
geo_track_map_view_layer_dict = geo_track_map_view_layer_instance.to_dict()
# create an instance of GeoTrackMapViewLayer from a dict
geo_track_map_view_layer_from_dict = GeoTrackMapViewLayer.from_dict(geo_track_map_view_layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


