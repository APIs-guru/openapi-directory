# GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest

Request message for CreateAnnotationSpecSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set** | [**GoogleCloudDatalabelingV1beta1AnnotationSpecSet**](GoogleCloudDatalabelingV1beta1AnnotationSpecSet.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_create_annotation_spec_set_request import GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest from a JSON string
google_cloud_datalabeling_v1beta1_create_annotation_spec_set_request_instance = GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_create_annotation_spec_set_request_dict = google_cloud_datalabeling_v1beta1_create_annotation_spec_set_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest from a dict
google_cloud_datalabeling_v1beta1_create_annotation_spec_set_request_from_dict = GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest.from_dict(google_cloud_datalabeling_v1beta1_create_annotation_spec_set_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


