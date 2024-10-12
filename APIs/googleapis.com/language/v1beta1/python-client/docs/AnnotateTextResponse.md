# AnnotateTextResponse

The text annotations response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_sentiment** | [**Sentiment**](Sentiment.md) |  | [optional] 
**entities** | [**List[Entity]**](Entity.md) | Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities. | [optional] 
**language** | **str** | The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. | [optional] 
**sentences** | [**List[Sentence]**](Sentence.md) | Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax. | [optional] 
**tokens** | [**List[Token]**](Token.md) | Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax. | [optional] 

## Example

```python
from openapi_client.models.annotate_text_response import AnnotateTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotateTextResponse from a JSON string
annotate_text_response_instance = AnnotateTextResponse.from_json(json)
# print the JSON string representation of the object
print(AnnotateTextResponse.to_json())

# convert the object into a dict
annotate_text_response_dict = annotate_text_response_instance.to_dict()
# create an instance of AnnotateTextResponse from a dict
annotate_text_response_from_dict = AnnotateTextResponse.from_dict(annotate_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


