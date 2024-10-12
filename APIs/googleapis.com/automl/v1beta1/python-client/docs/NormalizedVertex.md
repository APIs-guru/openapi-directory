# NormalizedVertex

A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **float** | Required. Horizontal coordinate. | [optional] 
**y** | **float** | Required. Vertical coordinate. | [optional] 

## Example

```python
from openapi_client.models.normalized_vertex import NormalizedVertex

# TODO update the JSON string below
json = "{}"
# create an instance of NormalizedVertex from a JSON string
normalized_vertex_instance = NormalizedVertex.from_json(json)
# print the JSON string representation of the object
print(NormalizedVertex.to_json())

# convert the object into a dict
normalized_vertex_dict = normalized_vertex_instance.to_dict()
# create an instance of NormalizedVertex from a dict
normalized_vertex_from_dict = NormalizedVertex.from_dict(normalized_vertex_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


