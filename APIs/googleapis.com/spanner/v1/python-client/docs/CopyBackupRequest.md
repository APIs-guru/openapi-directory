# CopyBackupRequest

The request for CopyBackup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_id** | **str** | Required. The id of the backup copy. The &#x60;backup_id&#x60; appended to &#x60;parent&#x60; forms the full backup_uri of the form &#x60;projects//instances//backups/&#x60;. | [optional] 
**encryption_config** | [**CopyBackupEncryptionConfig**](CopyBackupEncryptionConfig.md) |  | [optional] 
**expire_time** | **str** | Required. The expiration time of the backup in microsecond granularity. The expiration time must be at least 6 hours and at most 366 days from the &#x60;create_time&#x60; of the source backup. Once the &#x60;expire_time&#x60; has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup. | [optional] 
**source_backup** | **str** | Required. The source backup to be copied. The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: &#x60;projects//instances//backups/&#x60;. | [optional] 

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


