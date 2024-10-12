# DataLakeAnalyticsAccountProperties

The account specific properties that are associated with an underlying Data Lake Analytics account. Returned only when retrieving a specific account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_policies** | [**List[ComputePolicy]**](ComputePolicy.md) | The list of compute policies associated with this account. | [optional] [readonly] 
**current_tier** | **str** | The commitment tier in use for the current month. | [optional] [readonly] 
**data_lake_store_accounts** | [**List[DataLakeStoreAccountInformation]**](DataLakeStoreAccountInformation.md) | The list of Data Lake Store accounts associated with this account. | [optional] [readonly] 
**default_data_lake_store_account** | **str** | The default Data Lake Store account associated with this account. | [optional] [readonly] 
**firewall_allow_azure_ips** | **str** | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | [optional] [readonly] 
**firewall_rules** | [**List[FirewallRule]**](FirewallRule.md) | The list of firewall rules associated with this account. | [optional] [readonly] 
**firewall_state** | **str** | The current state of the IP address firewall for this account. | [optional] [readonly] 
**max_degree_of_parallelism** | **int** | The maximum supported degree of parallelism for this account. | [optional] [readonly] [default to 30]
**max_degree_of_parallelism_per_job** | **int** | The maximum supported degree of parallelism per job for this account. | [optional] [readonly] 
**max_job_count** | **int** | The maximum supported jobs running under the account at the same time. | [optional] [readonly] [default to 3]
**min_priority_per_job** | **int** | The minimum supported priority per job for this account. | [optional] [readonly] 
**new_tier** | **str** | The commitment tier for the next month. | [optional] [readonly] 
**query_store_retention** | **int** | The number of days that job metadata is retained. | [optional] [readonly] [default to 30]
**storage_accounts** | [**List[StorageAccountInformation]**](StorageAccountInformation.md) | The list of Azure Blob Storage accounts associated with this account. | [optional] [readonly] 
**system_max_degree_of_parallelism** | **int** | The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account. | [optional] [readonly] 
**system_max_job_count** | **int** | The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account. | [optional] [readonly] 
**account_id** | **str** | The unique identifier associated with this Data Lake Analytics account. | [optional] [readonly] 
**creation_time** | **datetime** | The account creation time. | [optional] [readonly] 
**endpoint** | **str** | The full CName endpoint for this account. | [optional] [readonly] 
**last_modified_time** | **datetime** | The account last modified time. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning status of the Data Lake Analytics account. | [optional] [readonly] 
**state** | **str** | The state of the Data Lake Analytics account. | [optional] [readonly] 

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


