# DataLakeAnalyticsAccountListDataLakeStoreResult

Data Lake Account list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | total number of results. | [optional] [readonly] 
**next_link** | **str** | the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[DataLakeStoreAccountInfo]**](DataLakeStoreAccountInfo.md) | the results of the list operation | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_analytics_account_list_data_lake_store_result import DataLakeAnalyticsAccountListDataLakeStoreResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsAccountListDataLakeStoreResult from a JSON string
data_lake_analytics_account_list_data_lake_store_result_instance = DataLakeAnalyticsAccountListDataLakeStoreResult.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsAccountListDataLakeStoreResult.to_json())

# convert the object into a dict
data_lake_analytics_account_list_data_lake_store_result_dict = data_lake_analytics_account_list_data_lake_store_result_instance.to_dict()
# create an instance of DataLakeAnalyticsAccountListDataLakeStoreResult from a dict
data_lake_analytics_account_list_data_lake_store_result_from_dict = DataLakeAnalyticsAccountListDataLakeStoreResult.from_dict(data_lake_analytics_account_list_data_lake_store_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


