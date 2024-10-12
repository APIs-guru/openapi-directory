# UpdateDataLakeAnalyticsAccountProperties

The properties to update that are associated with an underlying Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_policies** | [**List[UpdateComputePolicyWithAccountParameters]**](UpdateComputePolicyWithAccountParameters.md) | The list of compute policies associated with this account. | [optional] 
**data_lake_store_accounts** | [**List[UpdateDataLakeStoreWithAccountParameters]**](UpdateDataLakeStoreWithAccountParameters.md) | The list of Data Lake Store accounts associated with this account. | [optional] 
**firewall_allow_azure_ips** | **str** | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | [optional] 
**firewall_rules** | [**List[UpdateFirewallRuleWithAccountParameters]**](UpdateFirewallRuleWithAccountParameters.md) | The list of firewall rules associated with this account. | [optional] 
**firewall_state** | **str** | The current state of the IP address firewall for this account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled. | [optional] 
**max_degree_of_parallelism** | **int** | The maximum supported degree of parallelism for this account. | [optional] 
**max_degree_of_parallelism_per_job** | **int** | The maximum supported degree of parallelism per job for this account. | [optional] 
**max_job_count** | **int** | The maximum supported jobs running under the account at the same time. | [optional] 
**min_priority_per_job** | **int** | The minimum supported priority per job for this account. | [optional] 
**new_tier** | **str** | The commitment tier to use for next month. | [optional] 
**query_store_retention** | **int** | The number of days that job metadata is retained. | [optional] 
**storage_accounts** | [**List[UpdateStorageAccountWithAccountParameters]**](UpdateStorageAccountWithAccountParameters.md) | The list of Azure Blob storage accounts associated with this account. | [optional] 

## Example

```python
from openapi_client.models.update_data_lake_analytics_account_properties import UpdateDataLakeAnalyticsAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataLakeAnalyticsAccountProperties from a JSON string
update_data_lake_analytics_account_properties_instance = UpdateDataLakeAnalyticsAccountProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateDataLakeAnalyticsAccountProperties.to_json())

# convert the object into a dict
update_data_lake_analytics_account_properties_dict = update_data_lake_analytics_account_properties_instance.to_dict()
# create an instance of UpdateDataLakeAnalyticsAccountProperties from a dict
update_data_lake_analytics_account_properties_from_dict = UpdateDataLakeAnalyticsAccountProperties.from_dict(update_data_lake_analytics_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


