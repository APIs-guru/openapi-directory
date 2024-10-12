# GoogleCloudDatalabelingV1beta1VideoClassificationConfig

Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set_configs** | [**List[GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig]**](GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig.md) | Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group. | [optional] 
**apply_shot_detection** | **bool** | Optional. Option to apply shot detection on the video. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_video_classification_config import GoogleCloudDatalabelingV1beta1VideoClassificationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1VideoClassificationConfig from a JSON string
google_cloud_datalabeling_v1beta1_video_classification_config_instance = GoogleCloudDatalabelingV1beta1VideoClassificationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1VideoClassificationConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_video_classification_config_dict = google_cloud_datalabeling_v1beta1_video_classification_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1VideoClassificationConfig from a dict
google_cloud_datalabeling_v1beta1_video_classification_config_from_dict = GoogleCloudDatalabelingV1beta1VideoClassificationConfig.from_dict(google_cloud_datalabeling_v1beta1_video_classification_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


