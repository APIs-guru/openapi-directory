# BatchAccountProperties

Account specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_endpoint** | **str** | The account endpoint used to interact with the Batch service. | [optional] [readonly] 
**active_job_and_job_schedule_quota** | **int** |  | [optional] [readonly] 
**auto_storage** | [**AutoStorageProperties**](AutoStorageProperties.md) |  | [optional] 
**dedicated_core_quota** | **int** | For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. | [optional] [readonly] 
**dedicated_core_quota_per_vm_family** | [**List[VirtualMachineFamilyCoreQuota]**](VirtualMachineFamilyCoreQuota.md) | A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. | [optional] [readonly] 
**dedicated_core_quota_per_vm_family_enforced** | **bool** | Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply. | [optional] [readonly] 
**key_vault_reference** | [**KeyVaultReference**](KeyVaultReference.md) |  | [optional] 
**low_priority_core_quota** | **int** | For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. | [optional] [readonly] 
**pool_allocation_mode** | [**PoolAllocationMode**](PoolAllocationMode.md) |  | [optional] 
**pool_quota** | **int** |  | [optional] [readonly] 
**provisioning_state** | **str** | The provisioned state of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch_account_properties import BatchAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountProperties from a JSON string
batch_account_properties_instance = BatchAccountProperties.from_json(json)
# print the JSON string representation of the object
print(BatchAccountProperties.to_json())

# convert the object into a dict
batch_account_properties_dict = batch_account_properties_instance.to_dict()
# create an instance of BatchAccountProperties from a dict
batch_account_properties_from_dict = BatchAccountProperties.from_dict(batch_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


