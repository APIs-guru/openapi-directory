# WordInfo

Word-specific information for recognized words.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where &#x60;is_final&#x3D;true&#x60;. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating &#x60;confidence&#x60; was not set. | [optional] 
**end_time** | **str** | Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if &#x60;enable_word_time_offsets&#x3D;true&#x60; and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. | [optional] 
**speaker_label** | **str** | Output only. A label value assigned for every unique speaker within the audio. This field specifies which speaker was detected to have spoken this word. For some models, like medical_conversation this can be actual speaker role, for example \&quot;patient\&quot; or \&quot;provider\&quot;, but generally this would be a number identifying a speaker. This field is only set if enable_speaker_diarization &#x3D; &#39;true&#39; and only for the top alternative. | [optional] [readonly] 
**speaker_tag** | **int** | Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from &#39;1&#39; to diarization_speaker_count. speaker_tag is set if enable_speaker_diarization &#x3D; &#39;true&#39; and only for the top alternative. Note: Use speaker_label instead. | [optional] [readonly] 
**start_time** | **str** | Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if &#x60;enable_word_time_offsets&#x3D;true&#x60; and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. | [optional] 
**word** | **str** | The word corresponding to this set of information. | [optional] 

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


