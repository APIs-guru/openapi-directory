# NlpSaftLangIdLocalesResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predictions** | [**List[NlpSaftLangIdLocalesResultLocale]**](NlpSaftLangIdLocalesResultLocale.md) | List of locales in which the text would be considered acceptable. Sorted in descending order according to each locale&#39;s respective likelihood. For example, if a Portuguese text is acceptable in both Brazil and Portugal, but is more strongly associated with Brazil, then the predictions would be [\&quot;pt-BR\&quot;, \&quot;pt-PT\&quot;], in that order. May be empty, indicating that the model did not predict any acceptable locales. | [optional] 

## Example

```python
from openapi_client.models.nlp_saft_lang_id_locales_result import NlpSaftLangIdLocalesResult

# TODO update the JSON string below
json = "{}"
# create an instance of NlpSaftLangIdLocalesResult from a JSON string
nlp_saft_lang_id_locales_result_instance = NlpSaftLangIdLocalesResult.from_json(json)
# print the JSON string representation of the object
print(NlpSaftLangIdLocalesResult.to_json())

# convert the object into a dict
nlp_saft_lang_id_locales_result_dict = nlp_saft_lang_id_locales_result_instance.to_dict()
# create an instance of NlpSaftLangIdLocalesResult from a dict
nlp_saft_lang_id_locales_result_from_dict = NlpSaftLangIdLocalesResult.from_dict(nlp_saft_lang_id_locales_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


