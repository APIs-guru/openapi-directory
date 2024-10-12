# AnalyzeSentimentResponse

The sentiment analysis response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_sentiment** | [**Sentiment**](Sentiment.md) |  | [optional] 
**language_code** | **str** | The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. | [optional] 
**language_supported** | **bool** | Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. | [optional] 
**sentences** | [**List[Sentence]**](Sentence.md) | The sentiment for all the sentences in the document. | [optional] 

## Example

```python
from openapi_client.models.analyze_sentiment_response import AnalyzeSentimentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeSentimentResponse from a JSON string
analyze_sentiment_response_instance = AnalyzeSentimentResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeSentimentResponse.to_json())

# convert the object into a dict
analyze_sentiment_response_dict = analyze_sentiment_response_instance.to_dict()
# create an instance of AnalyzeSentimentResponse from a dict
analyze_sentiment_response_from_dict = AnalyzeSentimentResponse.from_dict(analyze_sentiment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


