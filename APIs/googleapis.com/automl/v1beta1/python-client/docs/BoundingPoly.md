# BoundingPoly

A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_vertices** | [**List[NormalizedVertex]**](NormalizedVertex.md) | Output only . The bounding polygon normalized vertices. | [optional] 

## Example

```python
from openapi_client.models.bounding_poly import BoundingPoly

# TODO update the JSON string below
json = "{}"
# create an instance of BoundingPoly from a JSON string
bounding_poly_instance = BoundingPoly.from_json(json)
# print the JSON string representation of the object
print(BoundingPoly.to_json())

# convert the object into a dict
bounding_poly_dict = bounding_poly_instance.to_dict()
# create an instance of BoundingPoly from a dict
bounding_poly_from_dict = BoundingPoly.from_dict(bounding_poly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


