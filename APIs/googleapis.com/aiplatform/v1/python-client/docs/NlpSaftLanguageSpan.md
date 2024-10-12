# NlpSaftLanguageSpan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** |  | [optional] 
**language_code** | **str** | A BCP 47 language code for this span. | [optional] 
**locales** | [**NlpSaftLangIdLocalesResult**](NlpSaftLangIdLocalesResult.md) |  | [optional] 
**probability** | **float** | A probability associated with this prediction. | [optional] 
**start** | **int** | Start and end byte offsets, inclusive, within the given input string. A value of -1 implies that this field is not set. Both fields must either be set with a nonnegative value or both are unset. If both are unset then this LanguageSpan applies to the entire input. | [optional] 

## Example

```python
from openapi_client.models.nlp_saft_language_span import NlpSaftLanguageSpan

# TODO update the JSON string below
json = "{}"
# create an instance of NlpSaftLanguageSpan from a JSON string
nlp_saft_language_span_instance = NlpSaftLanguageSpan.from_json(json)
# print the JSON string representation of the object
print(NlpSaftLanguageSpan.to_json())

# convert the object into a dict
nlp_saft_language_span_dict = nlp_saft_language_span_instance.to_dict()
# create an instance of NlpSaftLanguageSpan from a dict
nlp_saft_language_span_from_dict = NlpSaftLanguageSpan.from_dict(nlp_saft_language_span_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


