# GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig

Annotation spec set with the setting of allowing multi labels or not.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_multi_label** | **bool** | Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set. | [optional] 
**annotation_spec_set** | **str** | Required. Annotation spec set resource name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotation_spec_set_config import GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig from a JSON string
google_cloud_datalabeling_v1beta1_annotation_spec_set_config_instance = GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotation_spec_set_config_dict = google_cloud_datalabeling_v1beta1_annotation_spec_set_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig from a dict
google_cloud_datalabeling_v1beta1_annotation_spec_set_config_from_dict = GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig.from_dict(google_cloud_datalabeling_v1beta1_annotation_spec_set_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


