# GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly

Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vertices** | [**List[GoogleCloudVideointelligenceV1p3beta1NormalizedVertex]**](GoogleCloudVideointelligenceV1p3beta1NormalizedVertex.md) | Normalized vertices of the bounding polygon. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_normalized_bounding_poly import GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly from a JSON string
google_cloud_videointelligence_v1p3beta1_normalized_bounding_poly_instance = GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_normalized_bounding_poly_dict = google_cloud_videointelligence_v1p3beta1_normalized_bounding_poly_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly from a dict
google_cloud_videointelligence_v1p3beta1_normalized_bounding_poly_from_dict = GoogleCloudVideointelligenceV1p3beta1NormalizedBoundingPoly.from_dict(google_cloud_videointelligence_v1p3beta1_normalized_bounding_poly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


