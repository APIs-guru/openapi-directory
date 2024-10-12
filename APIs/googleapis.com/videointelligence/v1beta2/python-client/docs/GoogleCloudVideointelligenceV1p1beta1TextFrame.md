# GoogleCloudVideointelligenceV1p1beta1TextFrame

Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rotated_bounding_box** | [**GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingPoly**](GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingPoly.md) |  | [optional] 
**time_offset** | **str** | Timestamp of this frame. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_text_frame import GoogleCloudVideointelligenceV1p1beta1TextFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1TextFrame from a JSON string
google_cloud_videointelligence_v1p1beta1_text_frame_instance = GoogleCloudVideointelligenceV1p1beta1TextFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1TextFrame.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_text_frame_dict = google_cloud_videointelligence_v1p1beta1_text_frame_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1TextFrame from a dict
google_cloud_videointelligence_v1p1beta1_text_frame_from_dict = GoogleCloudVideointelligenceV1p1beta1TextFrame.from_dict(google_cloud_videointelligence_v1p1beta1_text_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


