# GoogleCloudVideointelligenceV1beta2ExplicitContentFrame

Video frame level annotation results for explicit content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pornography_likelihood** | **str** | Likelihood of the pornography content.. | [optional] 
**time_offset** | **str** | Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_explicit_content_frame import GoogleCloudVideointelligenceV1beta2ExplicitContentFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2ExplicitContentFrame from a JSON string
google_cloud_videointelligence_v1beta2_explicit_content_frame_instance = GoogleCloudVideointelligenceV1beta2ExplicitContentFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2ExplicitContentFrame.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_explicit_content_frame_dict = google_cloud_videointelligence_v1beta2_explicit_content_frame_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2ExplicitContentFrame from a dict
google_cloud_videointelligence_v1beta2_explicit_content_frame_from_dict = GoogleCloudVideointelligenceV1beta2ExplicitContentFrame.from_dict(google_cloud_videointelligence_v1beta2_explicit_content_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


