# GoogleCloudVideointelligenceV1p3beta1WordInfo

Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating &#x60;confidence&#x60; was not set. | [optional] [readonly] 
**end_time** | **str** | Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if &#x60;enable_word_time_offsets&#x3D;true&#x60; and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. | [optional] 
**speaker_tag** | **int** | Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled. | [optional] [readonly] 
**start_time** | **str** | Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if &#x60;enable_word_time_offsets&#x3D;true&#x60; and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. | [optional] 
**word** | **str** | The word corresponding to this set of information. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_word_info import GoogleCloudVideointelligenceV1p3beta1WordInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1WordInfo from a JSON string
google_cloud_videointelligence_v1p3beta1_word_info_instance = GoogleCloudVideointelligenceV1p3beta1WordInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1WordInfo.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_word_info_dict = google_cloud_videointelligence_v1p3beta1_word_info_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1WordInfo from a dict
google_cloud_videointelligence_v1p3beta1_word_info_from_dict = GoogleCloudVideointelligenceV1p3beta1WordInfo.from_dict(google_cloud_videointelligence_v1p3beta1_word_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


