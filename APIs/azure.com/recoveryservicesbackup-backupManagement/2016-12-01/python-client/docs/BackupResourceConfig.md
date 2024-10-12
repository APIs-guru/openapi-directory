# BackupResourceConfig

The resource storage details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_type** | **str** | Storage type. | [optional] 
**storage_type_state** | **str** | Locked or Unlocked. Once a machine is registered against a resource, the storageTypeState is always Locked. | [optional] 

## Example

```python
from openapi_client.models.backup_resource_config import BackupResourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackupResourceConfig from a JSON string
backup_resource_config_instance = BackupResourceConfig.from_json(json)
# print the JSON string representation of the object
print(BackupResourceConfig.to_json())

# convert the object into a dict
backup_resource_config_dict = backup_resource_config_instance.to_dict()
# create an instance of BackupResourceConfig from a dict
backup_resource_config_from_dict = BackupResourceConfig.from_dict(backup_resource_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


