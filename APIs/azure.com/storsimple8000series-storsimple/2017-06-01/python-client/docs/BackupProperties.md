# BackupProperties

The properties of the backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_job_creation_type** | **str** | The backup job creation type. | [optional] 
**backup_policy_id** | **str** | The path ID of the backup policy. | [optional] 
**backup_type** | **str** | The type of the backup. | [optional] 
**created_on** | **datetime** | The time when the backup was created. | 
**elements** | [**List[BackupElement]**](BackupElement.md) | The backup elements. | 
**size_in_bytes** | **int** | The backup size in bytes. | 
**ssm_host_name** | **str** | The StorSimple Snapshot Manager host name. | [optional] 

## Example

```python
from openapi_client.models.backup_properties import BackupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupProperties from a JSON string
backup_properties_instance = BackupProperties.from_json(json)
# print the JSON string representation of the object
print(BackupProperties.to_json())

# convert the object into a dict
backup_properties_dict = backup_properties_instance.to_dict()
# create an instance of BackupProperties from a dict
backup_properties_from_dict = BackupProperties.from_dict(backup_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


