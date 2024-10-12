# TileCoordinates

Global tile coordinates. Global tile coordinates reference a specific tile on the map at a specific zoom level. The origin of this coordinate system is always at the northwest corner of the map, with x values increasing from west to east and y values increasing from north to south. Tiles are indexed using x, y coordinates from that origin. The zoom level containing the entire world in a tile is 0, and it increases as you zoom in. Zoom level n + 1 will contain 4 times as many tiles as zoom level n. The zoom level controls the level of detail of the data that is returned. In particular, this affects the set of feature types returned, their density, and geometry simplification. The exact tile contents may change over time, but care will be taken to keep supporting the most important use cases. For example, zoom level 15 shows roads for orientation and planning in the local neighborhood and zoom level 17 shows buildings to give users on foot a sense of situational awareness.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** | Required. The x coordinate. | [optional] 
**y** | **int** | Required. The y coordinate. | [optional] 
**zoom** | **int** | Required. The Google Maps API zoom level. | [optional] 

## Example

```python
from openapi_client.models.tile_coordinates import TileCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of TileCoordinates from a JSON string
tile_coordinates_instance = TileCoordinates.from_json(json)
# print the JSON string representation of the object
print(TileCoordinates.to_json())

# convert the object into a dict
tile_coordinates_dict = tile_coordinates_instance.to_dict()
# create an instance of TileCoordinates from a dict
tile_coordinates_from_dict = TileCoordinates.from_dict(tile_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


