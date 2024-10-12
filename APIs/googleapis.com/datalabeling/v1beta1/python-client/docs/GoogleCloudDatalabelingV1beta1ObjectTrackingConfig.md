# GoogleCloudDatalabelingV1beta1ObjectTrackingConfig

Config for video object tracking human labeling task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set** | **str** | Required. Annotation spec set resource name. | [optional] 
**clip_length** | **int** | Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s. | [optional] 
**overlap_length** | **int** | The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_object_tracking_config import GoogleCloudDatalabelingV1beta1ObjectTrackingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ObjectTrackingConfig from a JSON string
google_cloud_datalabeling_v1beta1_object_tracking_config_instance = GoogleCloudDatalabelingV1beta1ObjectTrackingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ObjectTrackingConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_object_tracking_config_dict = google_cloud_datalabeling_v1beta1_object_tracking_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ObjectTrackingConfig from a dict
google_cloud_datalabeling_v1beta1_object_tracking_config_from_dict = GoogleCloudDatalabelingV1beta1ObjectTrackingConfig.from_dict(google_cloud_datalabeling_v1beta1_object_tracking_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


