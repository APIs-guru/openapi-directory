# LanguageBatchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[LanguageBatchResultItem]**](LanguageBatchResultItem.md) | Response by document | [optional] [readonly] 
**errors** | [**List[ErrorRecord]**](ErrorRecord.md) | Errors and Warnings by document | [optional] [readonly] 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.language_batch_result import LanguageBatchResult

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageBatchResult from a JSON string
language_batch_result_instance = LanguageBatchResult.from_json(json)
# print the JSON string representation of the object
print(LanguageBatchResult.to_json())

# convert the object into a dict
language_batch_result_dict = language_batch_result_instance.to_dict()
# create an instance of LanguageBatchResult from a dict
language_batch_result_from_dict = LanguageBatchResult.from_dict(language_batch_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


