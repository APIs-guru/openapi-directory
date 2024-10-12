# RestoreBackupContext

Database instance restore from backup context. Backup context contains source instance id and project id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_run_id** | **str** | The ID of the backup run to restore from. | [optional] 
**instance_id** | **str** | The ID of the instance that the backup was taken from. | [optional] 
**kind** | **str** | This is always &#x60;sql#restoreBackupContext&#x60;. | [optional] 
**project** | **str** | The full project ID of the source instance. | [optional] 

## Example

```python
from openapi_client.models.restore_backup_context import RestoreBackupContext

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreBackupContext from a JSON string
restore_backup_context_instance = RestoreBackupContext.from_json(json)
# print the JSON string representation of the object
print(RestoreBackupContext.to_json())

# convert the object into a dict
restore_backup_context_dict = restore_backup_context_instance.to_dict()
# create an instance of RestoreBackupContext from a dict
restore_backup_context_from_dict = RestoreBackupContext.from_dict(restore_backup_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


