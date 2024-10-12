# SentimentResponse

Response for the sentiment analysis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the document | [optional] 
**language** | **str** | The used language of the document | 
**sentiment** | **float** | Detected sentiment of the document (value from -1.0 to 1.0) | 
**text** | **str** | The raw text of the document which has been analysed | [optional] 

## Example

```python
from openapi_client.models.sentiment_response import SentimentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SentimentResponse from a JSON string
sentiment_response_instance = SentimentResponse.from_json(json)
# print the JSON string representation of the object
print(SentimentResponse.to_json())

# convert the object into a dict
sentiment_response_dict = sentiment_response_instance.to_dict()
# create an instance of SentimentResponse from a dict
sentiment_response_from_dict = SentimentResponse.from_dict(sentiment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


