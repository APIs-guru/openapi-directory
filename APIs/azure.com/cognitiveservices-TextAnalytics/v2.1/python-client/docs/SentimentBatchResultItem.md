# SentimentBatchResultItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique, non-empty document identifier. | [optional] 
**score** | **float** | A decimal number between 0 and 1 denoting the sentiment of the document. A score above 0.7 usually refers to a positive document while a score below 0.3 normally has a negative connotation. Mid values refer to neutral text. | [optional] 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.sentiment_batch_result_item import SentimentBatchResultItem

# TODO update the JSON string below
json = "{}"
# create an instance of SentimentBatchResultItem from a JSON string
sentiment_batch_result_item_instance = SentimentBatchResultItem.from_json(json)
# print the JSON string representation of the object
print(SentimentBatchResultItem.to_json())

# convert the object into a dict
sentiment_batch_result_item_dict = sentiment_batch_result_item_instance.to_dict()
# create an instance of SentimentBatchResultItem from a dict
sentiment_batch_result_item_from_dict = SentimentBatchResultItem.from_dict(sentiment_batch_result_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


