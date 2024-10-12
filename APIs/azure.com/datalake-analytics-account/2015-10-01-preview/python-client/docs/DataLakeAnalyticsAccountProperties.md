# DataLakeAnalyticsAccountProperties

The account specific properties that are associated with an underlying Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | the account creation time. | [optional] [readonly] 
**data_lake_store_accounts** | [**List[DataLakeStoreAccountInfo]**](DataLakeStoreAccountInfo.md) | the list of Data Lake storage accounts associated with this account. | [optional] 
**default_data_lake_store_account** | **str** | the default data lake storage account associated with this Data Lake Analytics account. | [optional] 
**endpoint** | **str** | the full CName endpoint for this account. | [optional] [readonly] 
**last_modified_time** | **datetime** | the account last modified time. | [optional] [readonly] 
**max_degree_of_parallelism** | **int** | the maximum supported degree of parallelism for this account. | [optional] 
**max_job_count** | **int** | the maximum supported jobs running under the account at the same time. | [optional] 
**provisioning_state** | **str** | the provisioning status of the Data Lake Analytics account. | [optional] [readonly] 
**state** | **str** | the state of the Data Lake Analytics account. | [optional] [readonly] 
**storage_accounts** | [**List[StorageAccountInfo]**](StorageAccountInfo.md) | the list of Azure Blob storage accounts associated with this account. | [optional] 

## Example

```python
from openapi_client.models.data_lake_analytics_account_properties import DataLakeAnalyticsAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsAccountProperties from a JSON string
data_lake_analytics_account_properties_instance = DataLakeAnalyticsAccountProperties.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsAccountProperties.to_json())

# convert the object into a dict
data_lake_analytics_account_properties_dict = data_lake_analytics_account_properties_instance.to_dict()
# create an instance of DataLakeAnalyticsAccountProperties from a dict
data_lake_analytics_account_properties_from_dict = DataLakeAnalyticsAccountProperties.from_dict(data_lake_analytics_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


