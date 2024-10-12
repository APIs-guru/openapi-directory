# BoundingPoly

A bounding polygon for the detected image annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | A description of this polygon. | [optional] 
**vertices** | [**List[Vertex]**](Vertex.md) | List of the vertices of this polygon. | [optional] 

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


