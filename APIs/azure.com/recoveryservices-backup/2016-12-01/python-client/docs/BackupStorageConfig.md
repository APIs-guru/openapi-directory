# BackupStorageConfig

The backup storage config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupStorageConfigProperties**](BackupStorageConfigProperties.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.backup_storage_config import BackupStorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BackupStorageConfig from a JSON string
backup_storage_config_instance = BackupStorageConfig.from_json(json)
# print the JSON string representation of the object
print(BackupStorageConfig.to_json())

# convert the object into a dict
backup_storage_config_dict = backup_storage_config_instance.to_dict()
# create an instance of BackupStorageConfig from a dict
backup_storage_config_from_dict = BackupStorageConfig.from_dict(backup_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


