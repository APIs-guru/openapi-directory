# Sentiment

Represents the feeling associated with the entire text or entities in the text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**magnitude** | **float** | A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative). | [optional] 
**polarity** | **float** | DEPRECATED FIELD - This field is being deprecated in favor of score. Please refer to our documentation at https://cloud.google.com/natural-language/docs for more information. | [optional] 
**score** | **float** | Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment). | [optional] 

## Example

```python
from openapi_client.models.sentiment import Sentiment

# TODO update the JSON string below
json = "{}"
# create an instance of Sentiment from a JSON string
sentiment_instance = Sentiment.from_json(json)
# print the JSON string representation of the object
print(Sentiment.to_json())

# convert the object into a dict
sentiment_dict = sentiment_instance.to_dict()
# create an instance of Sentiment from a dict
sentiment_from_dict = Sentiment.from_dict(sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


