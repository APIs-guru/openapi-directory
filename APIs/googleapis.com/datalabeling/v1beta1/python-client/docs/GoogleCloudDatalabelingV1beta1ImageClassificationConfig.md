# GoogleCloudDatalabelingV1beta1ImageClassificationConfig

Config for image classification human labeling task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_multi_label** | **bool** | Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image. | [optional] 
**annotation_spec_set** | **str** | Required. Annotation spec set resource name. | [optional] 
**answer_aggregation_type** | **str** | Optional. The type of how to aggregate answers. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_image_classification_config import GoogleCloudDatalabelingV1beta1ImageClassificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ImageClassificationConfig from a JSON string
google_cloud_datalabeling_v1beta1_image_classification_config_instance = GoogleCloudDatalabelingV1beta1ImageClassificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ImageClassificationConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_image_classification_config_dict = google_cloud_datalabeling_v1beta1_image_classification_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ImageClassificationConfig from a dict
google_cloud_datalabeling_v1beta1_image_classification_config_from_dict = GoogleCloudDatalabelingV1beta1ImageClassificationConfig.from_dict(google_cloud_datalabeling_v1beta1_image_classification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


