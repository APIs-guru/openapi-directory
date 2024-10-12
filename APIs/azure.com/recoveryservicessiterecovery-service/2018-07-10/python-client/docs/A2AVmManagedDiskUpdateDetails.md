# A2AVmManagedDiskUpdateDetails

Azure VM managed disk update input details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_info** | [**DiskEncryptionInfo**](DiskEncryptionInfo.md) |  | [optional] 
**disk_id** | **str** | The disk Id. | [optional] 
**failover_disk_name** | **str** | The target disk name for unplanned failover operation. | [optional] 
**recovery_replica_disk_account_type** | **str** | The replica disk type before failover. | [optional] 
**recovery_target_disk_account_type** | **str** | The target disk type before failover. | [optional] 
**tfo_disk_name** | **str** | The target disk name for test failover operation. | [optional] 

## Example

```python
from openapi_client.models.a2_avm_managed_disk_update_details import A2AVmManagedDiskUpdateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AVmManagedDiskUpdateDetails from a JSON string
a2_avm_managed_disk_update_details_instance = A2AVmManagedDiskUpdateDetails.from_json(json)
# print the JSON string representation of the object
print(A2AVmManagedDiskUpdateDetails.to_json())

# convert the object into a dict
a2_avm_managed_disk_update_details_dict = a2_avm_managed_disk_update_details_instance.to_dict()
# create an instance of A2AVmManagedDiskUpdateDetails from a dict
a2_avm_managed_disk_update_details_from_dict = A2AVmManagedDiskUpdateDetails.from_dict(a2_avm_managed_disk_update_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


