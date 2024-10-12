# BatchAccountProperties

Account specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_endpoint** | **str** | The account endpoint used to interact with the Batch service. | [optional] [readonly] 
**active_job_and_job_schedule_quota** | **int** |  | [optional] [readonly] 
**auto_storage** | [**AutoStorageProperties**](AutoStorageProperties.md) |  | [optional] 
**dedicated_core_quota** | **int** |  | [optional] [readonly] 
**key_vault_reference** | [**KeyVaultReference**](KeyVaultReference.md) |  | [optional] 
**low_priority_core_quota** | **int** |  | [optional] [readonly] 
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


