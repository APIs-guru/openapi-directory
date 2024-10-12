# BackupStorageConfigProperties

The backup storage config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_model_type** | **str** | Storage model type. | [optional] 
**storage_type** | **str** | Storage type. | [optional] 
**storage_type_state** | **str** | Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked. | [optional] 

## Example

```python
from openapi_client.models.backup_storage_config_properties import BackupStorageConfigProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupStorageConfigProperties from a JSON string
backup_storage_config_properties_instance = BackupStorageConfigProperties.from_json(json)
# print the JSON string representation of the object
print(BackupStorageConfigProperties.to_json())

# convert the object into a dict
backup_storage_config_properties_dict = backup_storage_config_properties_instance.to_dict()
# create an instance of BackupStorageConfigProperties from a dict
backup_storage_config_properties_from_dict = BackupStorageConfigProperties.from_dict(backup_storage_config_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


