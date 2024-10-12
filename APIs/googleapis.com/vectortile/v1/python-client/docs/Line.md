# Line

Represents a 2D polyline. Used to represent segments such as roads, train tracks, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basemap_z_order** | [**BasemapZOrder**](BasemapZOrder.md) |  | [optional] 
**vertex_offsets** | [**Vertex2DList**](Vertex2DList.md) |  | [optional] 
**z_order** | **int** | The z-order of the line. Lines with a lower z-order should be rendered beneath lines with a higher z-order. This z-ordering does not imply anything about the altitude of the area relative to the ground, but it can be used to prevent z-fighting during rendering on the client. In general, larger and more important road features will have a higher z-order line associated with them. This z-ordering can only be used to compare lines, and cannot be compared with the z_order field in the Area message. The z-order may be negative or zero. Prefer Line.basemap_z_order. | [optional] 

## Example

```python
from openapi_client.models.line import Line

# TODO update the JSON string below
json = "{}"
# create an instance of Line from a JSON string
line_instance = Line.from_json(json)
# print the JSON string representation of the object
print(Line.to_json())

# convert the object into a dict
line_dict = line_instance.to_dict()
# create an instance of Line from a dict
line_from_dict = Line.from_dict(line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


