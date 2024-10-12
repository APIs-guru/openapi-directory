# BackupEngineBase

The base backup engine class. All workload-specific backup engines derive from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_engine_id** | **str** | The ID of the backup engine. | [optional] 
**backup_engine_type** | **str** | The type of the backup engine. | [optional] 
**backup_management_type** | **str** | The type of backup management associated with the backup engine. | [optional] 
**can_re_register** | **bool** | The flag indicating whether the backup engine be registered again, once the engine has been initially registered. | [optional] 
**friendly_name** | **str** | The friendly name of the backup engine. | [optional] 
**health_status** | **str** | The backup status of the backup engine. | [optional] 
**registration_status** | **str** | The status of the backup engine registration with the Recovery Services vault. | [optional] 

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


