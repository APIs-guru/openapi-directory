# A2AUpdateReplicationProtectedItemInput

InMage Azure V2 input to update replication protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_info** | [**DiskEncryptionInfo**](DiskEncryptionInfo.md) |  | [optional] 
**managed_disk_update_details** | [**List[A2AVmManagedDiskUpdateDetails]**](A2AVmManagedDiskUpdateDetails.md) | Managed disk update details. | [optional] 
**recovery_boot_diag_storage_account_id** | **str** | The boot diagnostic storage account. | [optional] 
**recovery_cloud_service_id** | **str** | The target cloud service ARM Id (for V1). | [optional] 
**recovery_resource_group_id** | **str** | The target resource group ARM Id (for V2). | [optional] 
**tfo_azure_vm_name** | **str** | The user given name for test failover VM. | [optional] 

## Example

```python
from openapi_client.models.a2_a_update_replication_protected_item_input import A2AUpdateReplicationProtectedItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2AUpdateReplicationProtectedItemInput from a JSON string
a2_a_update_replication_protected_item_input_instance = A2AUpdateReplicationProtectedItemInput.from_json(json)
# print the JSON string representation of the object
print(A2AUpdateReplicationProtectedItemInput.to_json())

# convert the object into a dict
a2_a_update_replication_protected_item_input_dict = a2_a_update_replication_protected_item_input_instance.to_dict()
# create an instance of A2AUpdateReplicationProtectedItemInput from a dict
a2_a_update_replication_protected_item_input_from_dict = A2AUpdateReplicationProtectedItemInput.from_dict(a2_a_update_replication_protected_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


