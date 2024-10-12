# GoogleCloudVideointelligenceV1p1beta1LabelFrame

Video frame level annotation results for label detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence that the label is accurate. Range: [0, 1]. | [optional] 
**time_offset** | **str** | Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_label_frame import GoogleCloudVideointelligenceV1p1beta1LabelFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1LabelFrame from a JSON string
google_cloud_videointelligence_v1p1beta1_label_frame_instance = GoogleCloudVideointelligenceV1p1beta1LabelFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1LabelFrame.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_label_frame_dict = google_cloud_videointelligence_v1p1beta1_label_frame_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1LabelFrame from a dict
google_cloud_videointelligence_v1p1beta1_label_frame_from_dict = GoogleCloudVideointelligenceV1p1beta1LabelFrame.from_dict(google_cloud_videointelligence_v1p1beta1_label_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


