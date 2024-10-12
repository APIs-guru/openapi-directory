# MosaicLayout

A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **int** | The number of columns in the mosaic grid. The number of columns must be between 1 and 12, inclusive. | [optional] 
**tiles** | [**List[Tile]**](Tile.md) | The tiles to display. | [optional] 

## Example

```python
from openapi_client.models.mosaic_layout import MosaicLayout

# TODO update the JSON string below
json = "{}"
# create an instance of MosaicLayout from a JSON string
mosaic_layout_instance = MosaicLayout.from_json(json)
# print the JSON string representation of the object
print(MosaicLayout.to_json())

# convert the object into a dict
mosaic_layout_dict = mosaic_layout_instance.to_dict()
# create an instance of MosaicLayout from a dict
mosaic_layout_from_dict = MosaicLayout.from_dict(mosaic_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


