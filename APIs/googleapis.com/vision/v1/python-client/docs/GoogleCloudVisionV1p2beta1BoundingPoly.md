# GoogleCloudVisionV1p2beta1BoundingPoly

A bounding polygon for the detected image annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_vertices** | [**List[GoogleCloudVisionV1p2beta1NormalizedVertex]**](GoogleCloudVisionV1p2beta1NormalizedVertex.md) | The bounding polygon normalized vertices. | [optional] 
**vertices** | [**List[GoogleCloudVisionV1p2beta1Vertex]**](GoogleCloudVisionV1p2beta1Vertex.md) | The bounding polygon vertices. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_bounding_poly import GoogleCloudVisionV1p2beta1BoundingPoly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1BoundingPoly from a JSON string
google_cloud_vision_v1p2beta1_bounding_poly_instance = GoogleCloudVisionV1p2beta1BoundingPoly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1BoundingPoly.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_bounding_poly_dict = google_cloud_vision_v1p2beta1_bounding_poly_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1BoundingPoly from a dict
google_cloud_vision_v1p2beta1_bounding_poly_from_dict = GoogleCloudVisionV1p2beta1BoundingPoly.from_dict(google_cloud_vision_v1p2beta1_bounding_poly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


