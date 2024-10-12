# BatchAccountListResult

Values returned by the List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] 
**value** | [**List[BatchAccount]**](BatchAccount.md) | The collection of Batch accounts returned by the listing operation. | [optional] 

## Example

```python
from openapi_client.models.batch_account_list_result import BatchAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountListResult from a JSON string
batch_account_list_result_instance = BatchAccountListResult.from_json(json)
# print the JSON string representation of the object
print(BatchAccountListResult.to_json())

# convert the object into a dict
batch_account_list_result_dict = batch_account_list_result_instance.to_dict()
# create an instance of BatchAccountListResult from a dict
batch_account_list_result_from_dict = BatchAccountListResult.from_dict(batch_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


