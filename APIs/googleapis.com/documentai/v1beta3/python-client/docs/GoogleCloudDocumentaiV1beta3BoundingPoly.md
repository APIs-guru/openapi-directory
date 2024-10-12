# GoogleCloudDocumentaiV1beta3BoundingPoly

A bounding polygon for the detected image annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_vertices** | [**List[GoogleCloudDocumentaiV1beta3NormalizedVertex]**](GoogleCloudDocumentaiV1beta3NormalizedVertex.md) | The bounding polygon normalized vertices. | [optional] 
**vertices** | [**List[GoogleCloudDocumentaiV1beta3Vertex]**](GoogleCloudDocumentaiV1beta3Vertex.md) | The bounding polygon vertices. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_bounding_poly import GoogleCloudDocumentaiV1beta3BoundingPoly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BoundingPoly from a JSON string
google_cloud_documentai_v1beta3_bounding_poly_instance = GoogleCloudDocumentaiV1beta3BoundingPoly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BoundingPoly.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_bounding_poly_dict = google_cloud_documentai_v1beta3_bounding_poly_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BoundingPoly from a dict
google_cloud_documentai_v1beta3_bounding_poly_from_dict = GoogleCloudDocumentaiV1beta3BoundingPoly.from_dict(google_cloud_documentai_v1beta3_bounding_poly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


