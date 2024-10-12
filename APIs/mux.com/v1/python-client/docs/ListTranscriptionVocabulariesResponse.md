# ListTranscriptionVocabulariesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[TranscriptionVocabulary]**](TranscriptionVocabulary.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_transcription_vocabularies_response import ListTranscriptionVocabulariesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTranscriptionVocabulariesResponse from a JSON string
list_transcription_vocabularies_response_instance = ListTranscriptionVocabulariesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTranscriptionVocabulariesResponse.to_json())

# convert the object into a dict
list_transcription_vocabularies_response_dict = list_transcription_vocabularies_response_instance.to_dict()
# create an instance of ListTranscriptionVocabulariesResponse from a dict
list_transcription_vocabularies_response_from_dict = ListTranscriptionVocabulariesResponse.from_dict(list_transcription_vocabularies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


