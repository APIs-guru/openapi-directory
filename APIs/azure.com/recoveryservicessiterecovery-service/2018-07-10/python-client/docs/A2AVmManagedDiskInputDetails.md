# A2AVmManagedDiskInputDetails

Azure VM managed disk input details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_info** | [**DiskEncryptionInfo**](DiskEncryptionInfo.md) |  | [optional] 
**disk_id** | **str** | The disk Id. | [optional] 
**primary_staging_azure_storage_account_id** | **str** | The primary staging storage account Arm Id. | [optional] 
**recovery_disk_encryption_set_id** | **str** | The recovery disk encryption set Id. | [optional] 
**recovery_replica_disk_account_type** | **str** | The replica disk type. Its an optional value and will be same as source disk type if not user provided. | [optional] 
**recovery_resource_group_id** | **str** | The target resource group Arm Id. | [optional] 
**recovery_target_disk_account_type** | **str** | The target disk type after failover. Its an optional value and will be same as source disk type if not user provided. | [optional] 

## Example

```python
from openapi_client.models.a2_avm_managed_disk_input_details import A2AVmManagedDiskInputDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AVmManagedDiskInputDetails from a JSON string
a2_avm_managed_disk_input_details_instance = A2AVmManagedDiskInputDetails.from_json(json)
# print the JSON string representation of the object
print(A2AVmManagedDiskInputDetails.to_json())

# convert the object into a dict
a2_avm_managed_disk_input_details_dict = a2_avm_managed_disk_input_details_instance.to_dict()
# create an instance of A2AVmManagedDiskInputDetails from a dict
a2_avm_managed_disk_input_details_from_dict = A2AVmManagedDiskInputDetails.from_dict(a2_avm_managed_disk_input_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


