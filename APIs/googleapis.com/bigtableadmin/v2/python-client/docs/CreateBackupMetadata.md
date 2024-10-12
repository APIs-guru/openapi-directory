# CreateBackupMetadata

Metadata type for the operation returned by CreateBackup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | If set, the time at which this operation finished or was cancelled. | [optional] 
**name** | **str** | The name of the backup being created. | [optional] 
**source_table** | **str** | The name of the table the backup is created from. | [optional] 
**start_time** | **str** | The time at which this operation started. | [optional] 

## Example

```python
from openapi_client.models.create_backup_metadata import CreateBackupMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBackupMetadata from a JSON string
create_backup_metadata_instance = CreateBackupMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateBackupMetadata.to_json())

# convert the object into a dict
create_backup_metadata_dict = create_backup_metadata_instance.to_dict()
# create an instance of CreateBackupMetadata from a dict
create_backup_metadata_from_dict = CreateBackupMetadata.from_dict(create_backup_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


