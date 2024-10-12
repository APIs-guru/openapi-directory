# TranscriptNormalization

Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[Entry]**](Entry.md) | A list of replacement entries. We will perform replacement with one entry at a time. For example, the second entry in [\&quot;cat\&quot; &#x3D;&gt; \&quot;dog\&quot;, \&quot;mountain cat\&quot; &#x3D;&gt; \&quot;mountain dog\&quot;] will never be applied because we will always process the first entry before it. At most 100 entries. | [optional] 

## Example

```python
from openapi_client.models.transcript_normalization import TranscriptNormalization

# TODO update the JSON string below
json = "{}"
# create an instance of TranscriptNormalization from a JSON string
transcript_normalization_instance = TranscriptNormalization.from_json(json)
# print the JSON string representation of the object
print(TranscriptNormalization.to_json())

# convert the object into a dict
transcript_normalization_dict = transcript_normalization_instance.to_dict()
# create an instance of TranscriptNormalization from a dict
transcript_normalization_from_dict = TranscriptNormalization.from_dict(transcript_normalization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


