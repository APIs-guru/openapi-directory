# KeyPhraseBatchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[KeyPhraseBatchResultItem]**](KeyPhraseBatchResultItem.md) | Response by document | [optional] [readonly] 
**errors** | [**List[ErrorRecord]**](ErrorRecord.md) | Errors and Warnings by document | [optional] [readonly] 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.key_phrase_batch_result import KeyPhraseBatchResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeyPhraseBatchResult from a JSON string
key_phrase_batch_result_instance = KeyPhraseBatchResult.from_json(json)
# print the JSON string representation of the object
print(KeyPhraseBatchResult.to_json())

# convert the object into a dict
key_phrase_batch_result_dict = key_phrase_batch_result_instance.to_dict()
# create an instance of KeyPhraseBatchResult from a dict
key_phrase_batch_result_from_dict = KeyPhraseBatchResult.from_dict(key_phrase_batch_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


