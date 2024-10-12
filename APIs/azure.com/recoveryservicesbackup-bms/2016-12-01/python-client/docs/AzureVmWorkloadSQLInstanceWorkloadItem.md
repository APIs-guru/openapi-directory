# AzureVmWorkloadSQLInstanceWorkloadItem

Azure VM workload-specific workload item representing SQL Instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_directory_paths** | [**List[SQLDataDirectory]**](SQLDataDirectory.md) | Data Directory Paths for default directories | [optional] 

## Example

```python
from openapi_client.models.azure_vm_workload_sql_instance_workload_item import AzureVmWorkloadSQLInstanceWorkloadItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmWorkloadSQLInstanceWorkloadItem from a JSON string
azure_vm_workload_sql_instance_workload_item_instance = AzureVmWorkloadSQLInstanceWorkloadItem.from_json(json)
# print the JSON string representation of the object
print(AzureVmWorkloadSQLInstanceWorkloadItem.to_json())

# convert the object into a dict
azure_vm_workload_sql_instance_workload_item_dict = azure_vm_workload_sql_instance_workload_item_instance.to_dict()
# create an instance of AzureVmWorkloadSQLInstanceWorkloadItem from a dict
azure_vm_workload_sql_instance_workload_item_from_dict = AzureVmWorkloadSQLInstanceWorkloadItem.from_dict(azure_vm_workload_sql_instance_workload_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


