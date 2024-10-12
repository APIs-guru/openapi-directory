# GoogleCloudVideointelligenceV1beta2TextFrame

Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rotated_bounding_box** | [**GoogleCloudVideointelligenceV1beta2NormalizedBoundingPoly**](GoogleCloudVideointelligenceV1beta2NormalizedBoundingPoly.md) |  | [optional] 
**time_offset** | **str** | Timestamp of this frame. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_text_frame import GoogleCloudVideointelligenceV1beta2TextFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2TextFrame from a JSON string
google_cloud_videointelligence_v1beta2_text_frame_instance = GoogleCloudVideointelligenceV1beta2TextFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2TextFrame.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_text_frame_dict = google_cloud_videointelligence_v1beta2_text_frame_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2TextFrame from a dict
google_cloud_videointelligence_v1beta2_text_frame_from_dict = GoogleCloudVideointelligenceV1beta2TextFrame.from_dict(google_cloud_videointelligence_v1beta2_text_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


