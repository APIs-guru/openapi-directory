# GoogleCloudVideointelligenceV1p2beta1LabelSegment

Video segment level annotation results for label detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence that the label is accurate. Range: [0, 1]. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1p2beta1VideoSegment**](GoogleCloudVideointelligenceV1p2beta1VideoSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_label_segment import GoogleCloudVideointelligenceV1p2beta1LabelSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1LabelSegment from a JSON string
google_cloud_videointelligence_v1p2beta1_label_segment_instance = GoogleCloudVideointelligenceV1p2beta1LabelSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1LabelSegment.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_label_segment_dict = google_cloud_videointelligence_v1p2beta1_label_segment_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1LabelSegment from a dict
google_cloud_videointelligence_v1p2beta1_label_segment_from_dict = GoogleCloudVideointelligenceV1p2beta1LabelSegment.from_dict(google_cloud_videointelligence_v1p2beta1_label_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


