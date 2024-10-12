# BackupContext

Backup context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_id** | **str** | The identifier of the backup. | [optional] 
**kind** | **str** | This is always &#x60;sql#backupContext&#x60;. | [optional] 

## Example

```python
from openapi_client.models.backup_context import BackupContext

# TODO update the JSON string below
json = "{}"
# create an instance of BackupContext from a JSON string
backup_context_instance = BackupContext.from_json(json)
# print the JSON string representation of the object
print(BackupContext.to_json())

# convert the object into a dict
backup_context_dict = backup_context_instance.to_dict()
# create an instance of BackupContext from a dict
backup_context_from_dict = BackupContext.from_dict(backup_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


