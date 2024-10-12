# TextSentimentAnnotation

Contains annotation details specific to text sentiment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sentiment** | **int** | Output only. The sentiment with the semantic, as given to the AutoMl.ImportData when populating the dataset from which the model used for the prediction had been trained. The sentiment values are between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive), with higher value meaning more positive sentiment. They are completely relative, i.e. 0 means least positive sentiment and sentiment_max means the most positive from the sentiments present in the train data. Therefore e.g. if train data had only negative sentiment, then sentiment_max, would be still negative (although least negative). The sentiment shouldn&#39;t be confused with \&quot;score\&quot; or \&quot;magnitude\&quot; from the previous Natural Language Sentiment Analysis API. | [optional] 

## Example

```python
from openapi_client.models.text_sentiment_annotation import TextSentimentAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of TextSentimentAnnotation from a JSON string
text_sentiment_annotation_instance = TextSentimentAnnotation.from_json(json)
# print the JSON string representation of the object
print(TextSentimentAnnotation.to_json())

# convert the object into a dict
text_sentiment_annotation_dict = text_sentiment_annotation_instance.to_dict()
# create an instance of TextSentimentAnnotation from a dict
text_sentiment_annotation_from_dict = TextSentimentAnnotation.from_dict(text_sentiment_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


