# SecondDerivativeElevationGrid

A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**altitude_multiplier** | **float** | A multiplier applied to the elements in the encoded data to extract the actual altitudes in meters. | [optional] 
**column_count** | **int** | The number of columns included in the encoded elevation data (i.e. the horizontal resolution of the grid). | [optional] 
**encoded_data** | **bytearray** | A stream of elements each representing a point on the tile running across each row from left to right, top to bottom. There will be precisely horizontal_resolution * vertical_resolution elements in the stream. The elements are not the heights, rather the second order derivative of the values one would expect in a stream of height data. Each element is a varint with the following encoding: ------------------------------------------------------------------------| | Head Nibble | ------------------------------------------------------------------------| | Bit 0 | Bit 1 | Bits 2-3 | | Terminator| Sign (1&#x3D;neg) | Least significant 2 bits of absolute error | ------------------------------------------------------------------------| | Tail Nibble #1 | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------| | ... | Tail Nibble #n | ------------------------------------------------------------------------| | Bit 0 | Bit 1-3 | | Terminator| Least significant 3 bits of absolute error | ------------------------------------------------------------------------| | [optional] 
**row_count** | **int** | The number of rows included in the encoded elevation data (i.e. the vertical resolution of the grid). | [optional] 

## Example

```python
from openapi_client.models.second_derivative_elevation_grid import SecondDerivativeElevationGrid

# TODO update the JSON string below
json = "{}"
# create an instance of SecondDerivativeElevationGrid from a JSON string
second_derivative_elevation_grid_instance = SecondDerivativeElevationGrid.from_json(json)
# print the JSON string representation of the object
print(SecondDerivativeElevationGrid.to_json())

# convert the object into a dict
second_derivative_elevation_grid_dict = second_derivative_elevation_grid_instance.to_dict()
# create an instance of SecondDerivativeElevationGrid from a dict
second_derivative_elevation_grid_from_dict = SecondDerivativeElevationGrid.from_dict(second_derivative_elevation_grid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


