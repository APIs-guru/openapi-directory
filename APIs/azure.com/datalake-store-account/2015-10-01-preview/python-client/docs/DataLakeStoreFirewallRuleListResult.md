# DataLakeStoreFirewallRuleListResult

Data Lake Store firewall rule list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | the total count of results that are available, but might not be returned in the current page. | [optional] [readonly] 
**next_link** | **str** | the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[FirewallRule]**](FirewallRule.md) | the results of the list operation | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_firewall_rule_list_result import DataLakeStoreFirewallRuleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreFirewallRuleListResult from a JSON string
data_lake_store_firewall_rule_list_result_instance = DataLakeStoreFirewallRuleListResult.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreFirewallRuleListResult.to_json())

# convert the object into a dict
data_lake_store_firewall_rule_list_result_dict = data_lake_store_firewall_rule_list_result_instance.to_dict()
# create an instance of DataLakeStoreFirewallRuleListResult from a dict
data_lake_store_firewall_rule_list_result_from_dict = DataLakeStoreFirewallRuleListResult.from_dict(data_lake_store_firewall_rule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


