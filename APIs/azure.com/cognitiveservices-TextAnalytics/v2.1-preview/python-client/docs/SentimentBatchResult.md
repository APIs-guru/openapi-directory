# SentimentBatchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[SentimentBatchResultItem]**](SentimentBatchResultItem.md) |  | [optional] [readonly] 
**errors** | [**List[ErrorRecord]**](ErrorRecord.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.sentiment_batch_result import SentimentBatchResult

# TODO update the JSON string below
json = "{}"
# create an instance of SentimentBatchResult from a JSON string
sentiment_batch_result_instance = SentimentBatchResult.from_json(json)
# print the JSON string representation of the object
print(SentimentBatchResult.to_json())

# convert the object into a dict
sentiment_batch_result_dict = sentiment_batch_result_instance.to_dict()
# create an instance of SentimentBatchResult from a dict
sentiment_batch_result_from_dict = SentimentBatchResult.from_dict(sentiment_batch_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


