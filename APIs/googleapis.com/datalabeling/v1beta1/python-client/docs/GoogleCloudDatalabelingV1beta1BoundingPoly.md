# GoogleCloudDatalabelingV1beta1BoundingPoly

A bounding polygon in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vertices** | [**List[GoogleCloudDatalabelingV1beta1Vertex]**](GoogleCloudDatalabelingV1beta1Vertex.md) | The bounding polygon vertices. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_bounding_poly import GoogleCloudDatalabelingV1beta1BoundingPoly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1BoundingPoly from a JSON string
google_cloud_datalabeling_v1beta1_bounding_poly_instance = GoogleCloudDatalabelingV1beta1BoundingPoly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1BoundingPoly.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_bounding_poly_dict = google_cloud_datalabeling_v1beta1_bounding_poly_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1BoundingPoly from a dict
google_cloud_datalabeling_v1beta1_bounding_poly_from_dict = GoogleCloudDatalabelingV1beta1BoundingPoly.from_dict(google_cloud_datalabeling_v1beta1_bounding_poly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


