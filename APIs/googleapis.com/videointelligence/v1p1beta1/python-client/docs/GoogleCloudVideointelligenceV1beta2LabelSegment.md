# GoogleCloudVideointelligenceV1beta2LabelSegment

Video segment level annotation results for label detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence that the label is accurate. Range: [0, 1]. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1beta2VideoSegment**](GoogleCloudVideointelligenceV1beta2VideoSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_label_segment import GoogleCloudVideointelligenceV1beta2LabelSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2LabelSegment from a JSON string
google_cloud_videointelligence_v1beta2_label_segment_instance = GoogleCloudVideointelligenceV1beta2LabelSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2LabelSegment.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_label_segment_dict = google_cloud_videointelligence_v1beta2_label_segment_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2LabelSegment from a dict
google_cloud_videointelligence_v1beta2_label_segment_from_dict = GoogleCloudVideointelligenceV1beta2LabelSegment.from_dict(google_cloud_videointelligence_v1beta2_label_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


