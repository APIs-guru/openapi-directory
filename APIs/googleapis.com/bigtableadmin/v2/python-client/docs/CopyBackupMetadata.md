# CopyBackupMetadata

Metadata type for the google.longrunning.Operation returned by CopyBackup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the backup being created through the copy operation. Values are of the form &#x60;projects//instances//clusters//backups/&#x60;. | [optional] 
**progress** | [**OperationProgress**](OperationProgress.md) |  | [optional] 
**source_backup_info** | [**BackupInfo**](BackupInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.copy_backup_metadata import CopyBackupMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CopyBackupMetadata from a JSON string
copy_backup_metadata_instance = CopyBackupMetadata.from_json(json)
# print the JSON string representation of the object
print(CopyBackupMetadata.to_json())

# convert the object into a dict
copy_backup_metadata_dict = copy_backup_metadata_instance.to_dict()
# create an instance of CopyBackupMetadata from a dict
copy_backup_metadata_from_dict = CopyBackupMetadata.from_dict(copy_backup_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


