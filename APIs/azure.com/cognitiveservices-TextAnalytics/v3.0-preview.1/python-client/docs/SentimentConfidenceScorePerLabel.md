# SentimentConfidenceScorePerLabel

Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative** | **float** |  | 
**neutral** | **float** |  | 
**positive** | **float** |  | 

## Example

```python
from openapi_client.models.sentiment_confidence_score_per_label import SentimentConfidenceScorePerLabel

# TODO update the JSON string below
json = "{}"
# create an instance of SentimentConfidenceScorePerLabel from a JSON string
sentiment_confidence_score_per_label_instance = SentimentConfidenceScorePerLabel.from_json(json)
# print the JSON string representation of the object
print(SentimentConfidenceScorePerLabel.to_json())

# convert the object into a dict
sentiment_confidence_score_per_label_dict = sentiment_confidence_score_per_label_instance.to_dict()
# create an instance of SentimentConfidenceScorePerLabel from a dict
sentiment_confidence_score_per_label_from_dict = SentimentConfidenceScorePerLabel.from_dict(sentiment_confidence_score_per_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


