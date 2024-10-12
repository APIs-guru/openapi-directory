# IaasVMBackupRequest

IaaS VM workload-specific backup request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_expiry_time_in_utc** | **datetime** | Backup copy will expire after the time specified (UTC). | [optional] 

## Example

```python
from openapi_client.models.iaas_vm_backup_request import IaasVMBackupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IaasVMBackupRequest from a JSON string
iaas_vm_backup_request_instance = IaasVMBackupRequest.from_json(json)
# print the JSON string representation of the object
print(IaasVMBackupRequest.to_json())

# convert the object into a dict
iaas_vm_backup_request_dict = iaas_vm_backup_request_instance.to_dict()
# create an instance of IaasVMBackupRequest from a dict
iaas_vm_backup_request_from_dict = IaasVMBackupRequest.from_dict(iaas_vm_backup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


