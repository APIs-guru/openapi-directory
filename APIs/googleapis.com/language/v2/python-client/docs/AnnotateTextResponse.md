# AnnotateTextResponse

The text annotations response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[ClassificationCategory]**](ClassificationCategory.md) | Categories identified in the input document. | [optional] 
**document_sentiment** | [**Sentiment**](Sentiment.md) |  | [optional] 
**entities** | [**List[Entity]**](Entity.md) | Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities or AnnotateTextRequest.Features.extract_entity_sentiment. | [optional] 
**language_code** | **str** | The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. | [optional] 
**language_supported** | **bool** | Whether the language is officially supported by all requested features. The API may still return a response when the language is not supported, but it is on a best effort basis. | [optional] 
**moderation_categories** | [**List[ClassificationCategory]**](ClassificationCategory.md) | Harmful and sensitive categories identified in the input document. | [optional] 
**sentences** | [**List[Sentence]**](Sentence.md) | Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment. | [optional] 

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


