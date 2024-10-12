# MapTile

Information used to render a map tile image in the proper location on a map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_url** | [**SafeUrlProto**](SafeUrlProto.md) |  | [optional] 
**tile_x** | **float** | Map tile x coordinate | [optional] 
**tile_y** | **float** | Map tile y coordinate | [optional] 

## Example

```python
from openapi_client.models.map_tile import MapTile

# TODO update the JSON string below
json = "{}"
# create an instance of MapTile from a JSON string
map_tile_instance = MapTile.from_json(json)
# print the JSON string representation of the object
print(MapTile.to_json())

# convert the object into a dict
map_tile_dict = map_tile_instance.to_dict()
# create an instance of MapTile from a dict
map_tile_from_dict = MapTile.from_dict(map_tile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


