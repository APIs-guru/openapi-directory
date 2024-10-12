# TranscriptionVocabulary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Time the Transcription Vocabulary was created, defined as a Unix timestamp (seconds since epoch). | [optional] 
**id** | **str** | Unique identifier for the Transcription Vocabulary | [optional] 
**name** | **str** | The user-supplied name of the Transcription Vocabulary. | [optional] 
**passthrough** | **str** | Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters. | [optional] 
**phrases** | **List[str]** | Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream&#39;s &#x60;generated_subtitles&#x60; configuration, the probability of successful speech recognition for these words or phrases is boosted. | [optional] 
**updated_at** | **str** | Time the Transcription Vocabulary was updated, defined as a Unix timestamp (seconds since epoch). | [optional] 

## Example

```python
from openapi_client.models.transcription_vocabulary import TranscriptionVocabulary

# TODO update the JSON string below
json = "{}"
# create an instance of TranscriptionVocabulary from a JSON string
transcription_vocabulary_instance = TranscriptionVocabulary.from_json(json)
# print the JSON string representation of the object
print(TranscriptionVocabulary.to_json())

# convert the object into a dict
transcription_vocabulary_dict = transcription_vocabulary_instance.to_dict()
# create an instance of TranscriptionVocabulary from a dict
transcription_vocabulary_from_dict = TranscriptionVocabulary.from_dict(transcription_vocabulary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


