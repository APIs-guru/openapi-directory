# DataLakeStoreAccountListResult

Data Lake Store account list information response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[DataLakeStoreAccountBasic]**](DataLakeStoreAccountBasic.md) | The results of the list operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_list_result import DataLakeStoreAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountListResult from a JSON string
data_lake_store_account_list_result_instance = DataLakeStoreAccountListResult.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountListResult.to_json())

# convert the object into a dict
data_lake_store_account_list_result_dict = data_lake_store_account_list_result_instance.to_dict()
# create an instance of DataLakeStoreAccountListResult from a dict
data_lake_store_account_list_result_from_dict = DataLakeStoreAccountListResult.from_dict(data_lake_store_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


