# CopyBackupRequest

The request for CopyBackup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_id** | **str** | Required. The id of the new backup. The &#x60;backup_id&#x60; along with &#x60;parent&#x60; are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: &#x60;projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}&#x60;. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*. | [optional] 
**expire_time** | **str** | Required. Required. The expiration time of the copied backup with microsecond granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the &#x60;expire_time&#x60; has passed, Cloud Bigtable will delete the backup and free the resources used by the backup. | [optional] 
**source_backup** | **str** | Required. The source backup to be copied from. The source backup needs to be in READY state for it to be copied. Copying a copied backup is not allowed. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: &#x60;projects//instances//clusters//backups/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.copy_backup_request import CopyBackupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CopyBackupRequest from a JSON string
copy_backup_request_instance = CopyBackupRequest.from_json(json)
# print the JSON string representation of the object
print(CopyBackupRequest.to_json())

# convert the object into a dict
copy_backup_request_dict = copy_backup_request_instance.to_dict()
# create an instance of CopyBackupRequest from a dict
copy_backup_request_from_dict = CopyBackupRequest.from_dict(copy_backup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


