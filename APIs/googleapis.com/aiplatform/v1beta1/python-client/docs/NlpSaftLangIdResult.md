# NlpSaftLangIdResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_version** | **str** | The version of the model used to create these annotations. | [optional] 
**predictions** | [**List[NlpSaftLanguageSpan]**](NlpSaftLanguageSpan.md) | This field stores the n-best list of possible BCP 47 language code strings for a given input sorted in descending order according to each code&#39;s respective probability. | [optional] 
**span_predictions** | [**List[NlpSaftLanguageSpanSequence]**](NlpSaftLanguageSpanSequence.md) | This field stores language predictions of subspans of the input, when available. Each LanguageSpanSequence is a sequence of LanguageSpans. A particular sequence of LanguageSpans has an associated probability, and need not necessarily cover the entire input. If no language could be predicted for any span, then this field may be empty. | [optional] 

## Example

```python
from openapi_client.models.nlp_saft_lang_id_result import NlpSaftLangIdResult

# TODO update the JSON string below
json = "{}"
# create an instance of NlpSaftLangIdResult from a JSON string
nlp_saft_lang_id_result_instance = NlpSaftLangIdResult.from_json(json)
# print the JSON string representation of the object
print(NlpSaftLangIdResult.to_json())

# convert the object into a dict
nlp_saft_lang_id_result_dict = nlp_saft_lang_id_result_instance.to_dict()
# create an instance of NlpSaftLangIdResult from a dict
nlp_saft_lang_id_result_from_dict = NlpSaftLangIdResult.from_dict(nlp_saft_lang_id_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


