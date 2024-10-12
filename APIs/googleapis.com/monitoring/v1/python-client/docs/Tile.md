# Tile

A single tile in the mosaic. The placement and size of the tile are configurable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the tile, measured in grid blocks. Tiles must have a minimum height of 1. | [optional] 
**widget** | [**Widget**](Widget.md) |  | [optional] 
**width** | **int** | The width of the tile, measured in grid blocks. Tiles must have a minimum width of 1. | [optional] 
**x_pos** | **int** | The zero-indexed position of the tile in grid blocks relative to the left edge of the grid. Tiles must be contained within the specified number of columns. x_pos cannot be negative. | [optional] 
**y_pos** | **int** | The zero-indexed position of the tile in grid blocks relative to the top edge of the grid. y_pos cannot be negative. | [optional] 

## Example

```python
from openapi_client.models.tile import Tile

# TODO update the JSON string below
json = "{}"
# create an instance of Tile from a JSON string
tile_instance = Tile.from_json(json)
# print the JSON string representation of the object
print(Tile.to_json())

# convert the object into a dict
tile_dict = tile_instance.to_dict()
# create an instance of Tile from a dict
tile_from_dict = Tile.from_dict(tile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


