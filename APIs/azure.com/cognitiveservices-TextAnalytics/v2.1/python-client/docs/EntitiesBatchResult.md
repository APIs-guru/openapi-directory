# EntitiesBatchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[EntitiesBatchResultItem]**](EntitiesBatchResultItem.md) | Response by document | [optional] [readonly] 
**errors** | [**List[ErrorRecord]**](ErrorRecord.md) | Errors and Warnings by document | [optional] [readonly] 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.entities_batch_result import EntitiesBatchResult

# TODO update the JSON string below
json = "{}"
# create an instance of EntitiesBatchResult from a JSON string
entities_batch_result_instance = EntitiesBatchResult.from_json(json)
# print the JSON string representation of the object
print(EntitiesBatchResult.to_json())

# convert the object into a dict
entities_batch_result_dict = entities_batch_result_instance.to_dict()
# create an instance of EntitiesBatchResult from a dict
entities_batch_result_from_dict = EntitiesBatchResult.from_dict(entities_batch_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


