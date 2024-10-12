# GoogleCloudDatalabelingV1beta1SegmentationConfig

Config for image segmentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set** | **str** | Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id} | [optional] 
**instruction_message** | **str** | Instruction message showed on labelers UI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_segmentation_config import GoogleCloudDatalabelingV1beta1SegmentationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1SegmentationConfig from a JSON string
google_cloud_datalabeling_v1beta1_segmentation_config_instance = GoogleCloudDatalabelingV1beta1SegmentationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1SegmentationConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_segmentation_config_dict = google_cloud_datalabeling_v1beta1_segmentation_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1SegmentationConfig from a dict
google_cloud_datalabeling_v1beta1_segmentation_config_from_dict = GoogleCloudDatalabelingV1beta1SegmentationConfig.from_dict(google_cloud_datalabeling_v1beta1_segmentation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


