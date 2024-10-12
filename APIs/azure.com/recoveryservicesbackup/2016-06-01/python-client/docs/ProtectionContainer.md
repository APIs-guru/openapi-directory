# ProtectionContainer

The base class for a container with backup items. Containers with specific workloads are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | The backup management type for the container. | [optional] 
**container_type** | **str** | The type assigned to the container. The values to use for each of these properties are:&lt;br/&gt; 1. Compute Azure VM is Microsoft.Compute/virtualMachines&lt;br/&gt; 2. Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines&lt;br/&gt; 3. Windows machines (like Azure Backup Server and DPM) is Windows&lt;br/&gt; 4. Azure SQL instance is AzureSqlContainer. | [optional] [readonly] 
**friendly_name** | **str** | Friendly name of the container. | [optional] 
**health_status** | **str** | The status of the container&#39;s health. | [optional] 
**protectable_object_type** | **str** | The protectable object type associated with the container. | [optional] 
**registration_status** | **str** | The container&#39;s registration status with the Recovery Services vault. | [optional] 

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


