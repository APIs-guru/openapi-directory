# TranscriptionVocabularyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TranscriptionVocabulary**](TranscriptionVocabulary.md) |  | [optional] 

## Example

```python
from openapi_client.models.transcription_vocabulary_response import TranscriptionVocabularyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TranscriptionVocabularyResponse from a JSON string
transcription_vocabulary_response_instance = TranscriptionVocabularyResponse.from_json(json)
# print the JSON string representation of the object
print(TranscriptionVocabularyResponse.to_json())

# convert the object into a dict
transcription_vocabulary_response_dict = transcription_vocabulary_response_instance.to_dict()
# create an instance of TranscriptionVocabularyResponse from a dict
transcription_vocabulary_response_from_dict = TranscriptionVocabularyResponse.from_dict(transcription_vocabulary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


