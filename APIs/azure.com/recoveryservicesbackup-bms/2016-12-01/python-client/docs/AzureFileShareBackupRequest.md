# AzureFileShareBackupRequest

AzureFileShare workload-specific backup request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_expiry_time_in_utc** | **datetime** | Backup copy will expire after the time specified (UTC). | [optional] 

## Example

```python
from openapi_client.models.azure_file_share_backup_request import AzureFileShareBackupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareBackupRequest from a JSON string
azure_file_share_backup_request_instance = AzureFileShareBackupRequest.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareBackupRequest.to_json())

# convert the object into a dict
azure_file_share_backup_request_dict = azure_file_share_backup_request_instance.to_dict()
# create an instance of AzureFileShareBackupRequest from a dict
azure_file_share_backup_request_from_dict = AzureFileShareBackupRequest.from_dict(azure_file_share_backup_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


