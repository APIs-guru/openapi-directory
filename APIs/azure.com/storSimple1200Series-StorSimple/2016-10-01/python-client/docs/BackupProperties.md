# BackupProperties

Class represents Backup properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | The time when the backup was created. | [optional] 
**device_id** | **str** | The Device Identifier. | 
**elements** | [**List[BackupElement]**](BackupElement.md) | The backup elements. | 
**expiration_time** | **datetime** | The time when the backup will expire. | [optional] 
**initiated_by** | **str** | Indicates how the backup was initiated \&quot;Manual | Scheduled\&quot;. | 
**size_in_bytes** | **int** | The backup size in bytes. | 
**target_id** | **str** | The path id of the target FileServer or IscsiServer for which the backup was taken. | [optional] 
**target_type** | **str** | Type of target, FileServer or IscsiServer | [optional] 

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


