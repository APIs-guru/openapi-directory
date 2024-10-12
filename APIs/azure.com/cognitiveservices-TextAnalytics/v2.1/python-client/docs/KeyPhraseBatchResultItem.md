# KeyPhraseBatchResultItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique, non-empty document identifier. | [optional] 
**key_phrases** | **List[str]** | A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document. | [optional] [readonly] 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.key_phrase_batch_result_item import KeyPhraseBatchResultItem

# TODO update the JSON string below
json = "{}"
# create an instance of KeyPhraseBatchResultItem from a JSON string
key_phrase_batch_result_item_instance = KeyPhraseBatchResultItem.from_json(json)
# print the JSON string representation of the object
print(KeyPhraseBatchResultItem.to_json())

# convert the object into a dict
key_phrase_batch_result_item_dict = key_phrase_batch_result_item_instance.to_dict()
# create an instance of KeyPhraseBatchResultItem from a dict
key_phrase_batch_result_item_from_dict = KeyPhraseBatchResultItem.from_dict(key_phrase_batch_result_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


