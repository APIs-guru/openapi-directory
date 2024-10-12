# GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame

Video frame level annotation results for explicit content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pornography_likelihood** | **str** | Likelihood of the pornography content.. | [optional] 
**time_offset** | **str** | Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_explicit_content_frame import GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame from a JSON string
google_cloud_videointelligence_v1p1beta1_explicit_content_frame_instance = GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_explicit_content_frame_dict = google_cloud_videointelligence_v1p1beta1_explicit_content_frame_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame from a dict
google_cloud_videointelligence_v1p1beta1_explicit_content_frame_from_dict = GoogleCloudVideointelligenceV1p1beta1ExplicitContentFrame.from_dict(google_cloud_videointelligence_v1p1beta1_explicit_content_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


