# TerrainTile

A tile containing information about the terrain located in the region it covers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | [**TileCoordinates**](TileCoordinates.md) |  | [optional] 
**first_derivative** | [**FirstDerivativeElevationGrid**](FirstDerivativeElevationGrid.md) |  | [optional] 
**name** | **str** | Resource name of the tile. The tile resource name is prefixed by its collection ID &#x60;terrain/&#x60; followed by the resource ID, which encodes the tile&#39;s global x and y coordinates and zoom level as &#x60;@,,z&#x60;. For example, &#x60;terrain/@1,2,3z&#x60;. | [optional] 
**second_derivative** | [**SecondDerivativeElevationGrid**](SecondDerivativeElevationGrid.md) |  | [optional] 

## Example

```python
from openapi_client.models.terrain_tile import TerrainTile

# TODO update the JSON string below
json = "{}"
# create an instance of TerrainTile from a JSON string
terrain_tile_instance = TerrainTile.from_json(json)
# print the JSON string representation of the object
print(TerrainTile.to_json())

# convert the object into a dict
terrain_tile_dict = terrain_tile_instance.to_dict()
# create an instance of TerrainTile from a dict
terrain_tile_from_dict = TerrainTile.from_dict(terrain_tile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


