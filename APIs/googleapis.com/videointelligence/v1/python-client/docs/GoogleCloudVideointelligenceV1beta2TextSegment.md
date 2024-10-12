# GoogleCloudVideointelligenceV1beta2TextSegment

Video segment level annotation results for text detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears. | [optional] 
**frames** | [**List[GoogleCloudVideointelligenceV1beta2TextFrame]**](GoogleCloudVideointelligenceV1beta2TextFrame.md) | Information related to the frames where OCR detected text appears. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1beta2VideoSegment**](GoogleCloudVideointelligenceV1beta2VideoSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_text_segment import GoogleCloudVideointelligenceV1beta2TextSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2TextSegment from a JSON string
google_cloud_videointelligence_v1beta2_text_segment_instance = GoogleCloudVideointelligenceV1beta2TextSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2TextSegment.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_text_segment_dict = google_cloud_videointelligence_v1beta2_text_segment_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2TextSegment from a dict
google_cloud_videointelligence_v1beta2_text_segment_from_dict = GoogleCloudVideointelligenceV1beta2TextSegment.from_dict(google_cloud_videointelligence_v1beta2_text_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


