# DataLakeAnalyticsAccountListStorageAccountsResult

Azure Storage Account list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | total number of results. | [optional] [readonly] 
**next_link** | **str** | the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[StorageAccountInfo]**](StorageAccountInfo.md) | the results of the list operation | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_analytics_account_list_storage_accounts_result import DataLakeAnalyticsAccountListStorageAccountsResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsAccountListStorageAccountsResult from a JSON string
data_lake_analytics_account_list_storage_accounts_result_instance = DataLakeAnalyticsAccountListStorageAccountsResult.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsAccountListStorageAccountsResult.to_json())

# convert the object into a dict
data_lake_analytics_account_list_storage_accounts_result_dict = data_lake_analytics_account_list_storage_accounts_result_instance.to_dict()
# create an instance of DataLakeAnalyticsAccountListStorageAccountsResult from a dict
data_lake_analytics_account_list_storage_accounts_result_from_dict = DataLakeAnalyticsAccountListStorageAccountsResult.from_dict(data_lake_analytics_account_list_storage_accounts_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


