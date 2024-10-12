# NlpSaftLanguageSpanSequence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_spans** | [**List[NlpSaftLanguageSpan]**](NlpSaftLanguageSpan.md) | A sequence of LanguageSpan objects, each assigning a language to a subspan of the input. | [optional] 
**probability** | **float** | The probability of this sequence of LanguageSpans. | [optional] 

## Example

```python
from openapi_client.models.nlp_saft_language_span_sequence import NlpSaftLanguageSpanSequence

# TODO update the JSON string below
json = "{}"
# create an instance of NlpSaftLanguageSpanSequence from a JSON string
nlp_saft_language_span_sequence_instance = NlpSaftLanguageSpanSequence.from_json(json)
# print the JSON string representation of the object
print(NlpSaftLanguageSpanSequence.to_json())

# convert the object into a dict
nlp_saft_language_span_sequence_dict = nlp_saft_language_span_sequence_instance.to_dict()
# create an instance of NlpSaftLanguageSpanSequence from a dict
nlp_saft_language_span_sequence_from_dict = NlpSaftLanguageSpanSequence.from_dict(nlp_saft_language_span_sequence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


