# UpdateTranscriptionVocabularyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The user-supplied name of the Transcription Vocabulary. | [optional] 
**passthrough** | **str** | Arbitrary user-supplied metadata set for the Transcription Vocabulary. Max 255 characters. | [optional] 
**phrases** | **List[str]** | Phrases, individual words, or proper names to include in the Transcription Vocabulary. When the Transcription Vocabulary is attached to a live stream&#39;s &#x60;generated_subtitles&#x60;, the probability of successful speech recognition for these words or phrases is boosted. | 

## Example

```python
from openapi_client.models.update_transcription_vocabulary_request import UpdateTranscriptionVocabularyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTranscriptionVocabularyRequest from a JSON string
update_transcription_vocabulary_request_instance = UpdateTranscriptionVocabularyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTranscriptionVocabularyRequest.to_json())

# convert the object into a dict
update_transcription_vocabulary_request_dict = update_transcription_vocabulary_request_instance.to_dict()
# create an instance of UpdateTranscriptionVocabularyRequest from a dict
update_transcription_vocabulary_request_from_dict = UpdateTranscriptionVocabularyRequest.from_dict(update_transcription_vocabulary_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


