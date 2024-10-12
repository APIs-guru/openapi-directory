# TriangleStrip

Represents a strip of triangles. Each triangle uses the last edge of the previous one. The following diagram shows an example of a triangle strip, with each vertex labeled with its index in the vertex_index array. (1)-----(3) / \\ / \\ / \\ / \\ / \\ / \\ (0)-----(2)-----(4) Vertices may be in either clockwise or counter-clockwise order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vertex_indices** | **List[int]** | Index into the vertex_offset array representing the next vertex in the triangle strip. | [optional] 

## Example

```python
from openapi_client.models.triangle_strip import TriangleStrip

# TODO update the JSON string below
json = "{}"
# create an instance of TriangleStrip from a JSON string
triangle_strip_instance = TriangleStrip.from_json(json)
# print the JSON string representation of the object
print(TriangleStrip.to_json())

# convert the object into a dict
triangle_strip_dict = triangle_strip_instance.to_dict()
# create an instance of TriangleStrip from a dict
triangle_strip_from_dict = TriangleStrip.from_dict(triangle_strip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


