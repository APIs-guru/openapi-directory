# Geometry

Represents the geometry of a feature, that is, the shape that it has on the map. The local tile coordinate system has the origin at the north-west (upper-left) corner of the tile, and is scaled to 4096 units across each edge. The height (Z) axis has the same scale factor: an extruded area with a max_z value of 4096 has the same height as the width of the tile that it is on. There is no clipping boundary, so it is possible that some coordinates will lie outside the tile boundaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**areas** | [**List[Area]**](Area.md) | The areas present in this geometry. | [optional] 
**extruded_areas** | [**List[ExtrudedArea]**](ExtrudedArea.md) | The extruded areas present in this geometry. Not populated if modeled_volumes are included in this geometry unless always_include_building_footprints is set in GetFeatureTileRequest, in which case the client should decide which (extruded areas or modeled volumes) should be used (they should not be rendered together). | [optional] 
**lines** | [**List[Line]**](Line.md) | The lines present in this geometry. | [optional] 
**modeled_volumes** | [**List[ModeledVolume]**](ModeledVolume.md) | The modeled volumes present in this geometry. Not populated unless enable_modeled_volumes has been set in GetFeatureTileRequest. | [optional] 

## Example

```python
from openapi_client.models.geometry import Geometry

# TODO update the JSON string below
json = "{}"
# create an instance of Geometry from a JSON string
geometry_instance = Geometry.from_json(json)
# print the JSON string representation of the object
print(Geometry.to_json())

# convert the object into a dict
geometry_dict = geometry_instance.to_dict()
# create an instance of Geometry from a dict
geometry_from_dict = Geometry.from_dict(geometry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


