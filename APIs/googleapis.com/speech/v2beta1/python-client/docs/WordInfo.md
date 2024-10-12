# WordInfo

Word-specific information for recognized words.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where &#x60;is_final&#x3D;true&#x60;. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating &#x60;confidence&#x60; was not set. | [optional] [readonly] 
**end_offset** | **str** | Output only. Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if &#x60;enable_word_time_offsets&#x3D;true&#x60; and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. | [optional] [readonly] 
**speaker_tag** | **int** | Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from &#x60;1&#x60; to &#x60;diarization_config.max_speaker_count&#x60; . &#x60;speaker_tag&#x60; is set if &#x60;diarization_config.enable_speaker_diarization&#x60; &#x3D; &#x60;true&#x60; and only in the top alternative. | [optional] [readonly] 
**start_offset** | **str** | Output only. Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if &#x60;enable_word_time_offsets&#x3D;true&#x60; and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. | [optional] [readonly] 
**word** | **str** | Output only. The word corresponding to this set of information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.word_info import WordInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WordInfo from a JSON string
word_info_instance = WordInfo.from_json(json)
# print the JSON string representation of the object
print(WordInfo.to_json())

# convert the object into a dict
word_info_dict = word_info_instance.to_dict()
# create an instance of WordInfo from a dict
word_info_from_dict = WordInfo.from_dict(word_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


