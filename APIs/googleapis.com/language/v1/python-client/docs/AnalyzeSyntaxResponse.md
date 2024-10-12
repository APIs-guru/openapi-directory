# AnalyzeSyntaxResponse

The syntax analysis response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. | [optional] 
**sentences** | [**List[Sentence]**](Sentence.md) | Sentences in the input document. | [optional] 
**tokens** | [**List[Token]**](Token.md) | Tokens, along with their syntactic information, in the input document. | [optional] 

## Example

```python
from openapi_client.models.analyze_syntax_response import AnalyzeSyntaxResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeSyntaxResponse from a JSON string
analyze_syntax_response_instance = AnalyzeSyntaxResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeSyntaxResponse.to_json())

# convert the object into a dict
analyze_syntax_response_dict = analyze_syntax_response_instance.to_dict()
# create an instance of AnalyzeSyntaxResponse from a dict
analyze_syntax_response_from_dict = AnalyzeSyntaxResponse.from_dict(analyze_syntax_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


