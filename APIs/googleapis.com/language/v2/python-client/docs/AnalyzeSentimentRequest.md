# AnalyzeSentimentRequest

The sentiment analysis request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 
**encoding_type** | **str** | The encoding type used by the API to calculate sentence offsets. | [optional] 

## Example

```python
from openapi_client.models.analyze_sentiment_request import AnalyzeSentimentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeSentimentRequest from a JSON string
analyze_sentiment_request_instance = AnalyzeSentimentRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzeSentimentRequest.to_json())

# convert the object into a dict
analyze_sentiment_request_dict = analyze_sentiment_request_instance.to_dict()
# create an instance of AnalyzeSentimentRequest from a dict
analyze_sentiment_request_from_dict = AnalyzeSentimentRequest.from_dict(analyze_sentiment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


