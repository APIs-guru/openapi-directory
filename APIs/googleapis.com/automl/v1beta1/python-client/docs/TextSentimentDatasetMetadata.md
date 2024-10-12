# TextSentimentDatasetMetadata

Dataset metadata for text sentiment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sentiment_max** | **int** | Required. A sentiment is expressed as an integer ordinal, where higher value means a more positive sentiment. The range of sentiments that will be used is between 0 and sentiment_max (inclusive on both ends), and all the values in the range must be represented in the dataset before a model can be created. sentiment_max value must be between 1 and 10 (inclusive). | [optional] 

## Example

```python
from openapi_client.models.text_sentiment_dataset_metadata import TextSentimentDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TextSentimentDatasetMetadata from a JSON string
text_sentiment_dataset_metadata_instance = TextSentimentDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(TextSentimentDatasetMetadata.to_json())

# convert the object into a dict
text_sentiment_dataset_metadata_dict = text_sentiment_dataset_metadata_instance.to_dict()
# create an instance of TextSentimentDatasetMetadata from a dict
text_sentiment_dataset_metadata_from_dict = TextSentimentDatasetMetadata.from_dict(text_sentiment_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


