# BulkInsertOperationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_vm_count** | **int** | [Output Only] Count of VMs successfully created so far. | [optional] 
**deleted_vm_count** | **int** | [Output Only] Count of VMs that got deleted during rollback. | [optional] 
**failed_to_create_vm_count** | **int** | [Output Only] Count of VMs that started creating but encountered an error. | [optional] 
**status** | **str** | [Output Only] Creation status of BulkInsert operation - information if the flow is rolling forward or rolling back. | [optional] 
**target_vm_count** | **int** | [Output Only] Count of VMs originally planned to be created. | [optional] 

## Example

```python
from openapi_client.models.bulk_insert_operation_status import BulkInsertOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BulkInsertOperationStatus from a JSON string
bulk_insert_operation_status_instance = BulkInsertOperationStatus.from_json(json)
# print the JSON string representation of the object
print(BulkInsertOperationStatus.to_json())

# convert the object into a dict
bulk_insert_operation_status_dict = bulk_insert_operation_status_instance.to_dict()
# create an instance of BulkInsertOperationStatus from a dict
bulk_insert_operation_status_from_dict = BulkInsertOperationStatus.from_dict(bulk_insert_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


