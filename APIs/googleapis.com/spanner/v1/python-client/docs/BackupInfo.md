# BackupInfo

Information about a backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Name of the backup. | [optional] 
**create_time** | **str** | The time the CreateBackup request was received. | [optional] 
**source_database** | **str** | Name of the database the backup was created from. | [optional] 
**version_time** | **str** | The backup contains an externally consistent copy of &#x60;source_database&#x60; at the timestamp specified by &#x60;version_time&#x60;. If the CreateBackup request did not specify &#x60;version_time&#x60;, the &#x60;version_time&#x60; of the backup is equivalent to the &#x60;create_time&#x60;. | [optional] 

## Example

```python
from openapi_client.models.backup_info import BackupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BackupInfo from a JSON string
backup_info_instance = BackupInfo.from_json(json)
# print the JSON string representation of the object
print(BackupInfo.to_json())

# convert the object into a dict
backup_info_dict = backup_info_instance.to_dict()
# create an instance of BackupInfo from a dict
backup_info_from_dict = BackupInfo.from_dict(backup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


