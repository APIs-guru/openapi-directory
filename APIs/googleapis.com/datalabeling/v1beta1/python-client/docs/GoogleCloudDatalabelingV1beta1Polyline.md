# GoogleCloudDatalabelingV1beta1Polyline

A line with multiple line segments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vertices** | [**List[GoogleCloudDatalabelingV1beta1Vertex]**](GoogleCloudDatalabelingV1beta1Vertex.md) | The polyline vertices. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_polyline import GoogleCloudDatalabelingV1beta1Polyline

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Polyline from a JSON string
google_cloud_datalabeling_v1beta1_polyline_instance = GoogleCloudDatalabelingV1beta1Polyline.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Polyline.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_polyline_dict = google_cloud_datalabeling_v1beta1_polyline_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Polyline from a dict
google_cloud_datalabeling_v1beta1_polyline_from_dict = GoogleCloudDatalabelingV1beta1Polyline.from_dict(google_cloud_datalabeling_v1beta1_polyline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


