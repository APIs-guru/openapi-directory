# CreateDataLakeAnalyticsAccountProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_policies** | [**List[CreateComputePolicyWithAccountParameters]**](CreateComputePolicyWithAccountParameters.md) | The list of compute policies associated with this account. | [optional] 
**data_lake_store_accounts** | [**List[AddDataLakeStoreWithAccountParameters]**](AddDataLakeStoreWithAccountParameters.md) | The list of Data Lake Store accounts associated with this account. | 
**default_data_lake_store_account** | **str** | The default Data Lake Store account associated with this account. | 
**firewall_allow_azure_ips** | **str** | The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. | [optional] 
**firewall_rules** | [**List[CreateFirewallRuleWithAccountParameters]**](CreateFirewallRuleWithAccountParameters.md) | The list of firewall rules associated with this account. | [optional] 
**firewall_state** | **str** | The current state of the IP address firewall for this account. | [optional] 
**max_degree_of_parallelism** | **int** | The maximum supported degree of parallelism for this account. | [optional] [default to 30]
**max_degree_of_parallelism_per_job** | **int** | The maximum supported degree of parallelism per job for this account. | [optional] 
**max_job_count** | **int** | The maximum supported jobs running under the account at the same time. | [optional] [default to 3]
**min_priority_per_job** | **int** | The minimum supported priority per job for this account. | [optional] 
**new_tier** | **str** | The commitment tier for the next month. | [optional] 
**query_store_retention** | **int** | The number of days that job metadata is retained. | [optional] [default to 30]
**storage_accounts** | [**List[AddStorageAccountWithAccountParameters]**](AddStorageAccountWithAccountParameters.md) | The list of Azure Blob Storage accounts associated with this account. | [optional] 

## Example

```python
from openapi_client.models.create_data_lake_analytics_account_properties import CreateDataLakeAnalyticsAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataLakeAnalyticsAccountProperties from a JSON string
create_data_lake_analytics_account_properties_instance = CreateDataLakeAnalyticsAccountProperties.from_json(json)
# print the JSON string representation of the object
print(CreateDataLakeAnalyticsAccountProperties.to_json())

# convert the object into a dict
create_data_lake_analytics_account_properties_dict = create_data_lake_analytics_account_properties_instance.to_dict()
# create an instance of CreateDataLakeAnalyticsAccountProperties from a dict
create_data_lake_analytics_account_properties_from_dict = CreateDataLakeAnalyticsAccountProperties.from_dict(create_data_lake_analytics_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


