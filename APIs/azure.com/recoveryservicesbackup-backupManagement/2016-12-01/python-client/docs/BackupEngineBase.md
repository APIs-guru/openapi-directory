# BackupEngineBase

The base backup engine class. All workload specific backup engines derive from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_backup_agent_version** | **str** | Backup agent version | [optional] 
**backup_engine_id** | **str** | ID of the backup engine. | [optional] 
**backup_engine_state** | **str** | Status of the backup engine with the Recovery Services Vault. &#x3D; {Active/Deleting/DeleteFailed} | [optional] 
**backup_engine_type** | **str** | Type of the backup engine. | [optional] 
**backup_management_type** | **str** | Type of backup management for the backup engine. | [optional] 
**can_re_register** | **bool** | Flag indicating if the backup engine be registered, once already registered. | [optional] 
**dpm_version** | **str** | Backup engine version | [optional] 
**extended_info** | [**BackupEngineExtendedInfo**](BackupEngineExtendedInfo.md) |  | [optional] 
**friendly_name** | **str** | Friendly name of the backup engine. | [optional] 
**health_status** | **str** | Backup status of the backup engine. | [optional] 
**is_azure_backup_agent_upgrade_available** | **bool** | To check if backup agent upgrade available | [optional] 
**is_dpm_upgrade_available** | **bool** | To check if backup engine upgrade available | [optional] 
**registration_status** | **str** | Registration status of the backup engine with the Recovery Services Vault. | [optional] 

## Example

```python
from openapi_client.models.backup_engine_base import BackupEngineBase

# TODO update the JSON string below
json = "{}"
# create an instance of BackupEngineBase from a JSON string
backup_engine_base_instance = BackupEngineBase.from_json(json)
# print the JSON string representation of the object
print(BackupEngineBase.to_json())

# convert the object into a dict
backup_engine_base_dict = backup_engine_base_instance.to_dict()
# create an instance of BackupEngineBase from a dict
backup_engine_base_from_dict = BackupEngineBase.from_dict(backup_engine_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


