# GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly

Normalized bounding polygon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_vertices** | [**List[GoogleCloudDatalabelingV1beta1NormalizedVertex]**](GoogleCloudDatalabelingV1beta1NormalizedVertex.md) | The bounding polygon normalized vertices. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_normalized_bounding_poly import GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly from a JSON string
google_cloud_datalabeling_v1beta1_normalized_bounding_poly_instance = GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_normalized_bounding_poly_dict = google_cloud_datalabeling_v1beta1_normalized_bounding_poly_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly from a dict
google_cloud_datalabeling_v1beta1_normalized_bounding_poly_from_dict = GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly.from_dict(google_cloud_datalabeling_v1beta1_normalized_bounding_poly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


