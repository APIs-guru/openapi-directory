# ProtectionContainer

Base class for container with backup items. Containers with specific workloads are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Type of backup management for the container. | [optional] 
**container_type** | **str** | Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.  Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is  Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload  Backup is VMAppContainer | [optional] 
**friendly_name** | **str** | Friendly name of the container. | [optional] 
**health_status** | **str** | Status of health of the container. | [optional] 
**registration_status** | **str** | Status of registration of the container with the Recovery Services Vault. | [optional] 

## Example

```python
from openapi_client.models.protection_container import ProtectionContainer

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainer from a JSON string
protection_container_instance = ProtectionContainer.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainer.to_json())

# convert the object into a dict
protection_container_dict = protection_container_instance.to_dict()
# create an instance of ProtectionContainer from a dict
protection_container_from_dict = ProtectionContainer.from_dict(protection_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


