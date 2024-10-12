# Vertex

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** | X coordinate. | [optional] 
**y** | **int** | Y coordinate. | [optional] 

## Example

```python
from openapi_client.models.vertex import Vertex

# TODO update the JSON string below
json = "{}"
# create an instance of Vertex from a JSON string
vertex_instance = Vertex.from_json(json)
# print the JSON string representation of the object
print(Vertex.to_json())

# convert the object into a dict
vertex_dict = vertex_instance.to_dict()
# create an instance of Vertex from a dict
vertex_from_dict = Vertex.from_dict(vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


