# AzureWorkloadSQLAutoProtectionIntent

Azure Workload SQL Auto Protection intent item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workload_item_type** | **str** | Workload item type of the item for which intent is to be set | [optional] 

## Example

```python
from openapi_client.models.azure_workload_sql_auto_protection_intent import AzureWorkloadSQLAutoProtectionIntent

# TODO update the JSON string below
json = "{}"
# create an instance of AzureWorkloadSQLAutoProtectionIntent from a JSON string
azure_workload_sql_auto_protection_intent_instance = AzureWorkloadSQLAutoProtectionIntent.from_json(json)
# print the JSON string representation of the object
print(AzureWorkloadSQLAutoProtectionIntent.to_json())

# convert the object into a dict
azure_workload_sql_auto_protection_intent_dict = azure_workload_sql_auto_protection_intent_instance.to_dict()
# create an instance of AzureWorkloadSQLAutoProtectionIntent from a dict
azure_workload_sql_auto_protection_intent_from_dict = AzureWorkloadSQLAutoProtectionIntent.from_dict(azure_workload_sql_auto_protection_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


